import { neon } from "@neondatabase/serverless";
import type { SacramentMeeting } from "./types";

console.log("DATABASE_URL =", process.env.DATABASE_URL);

const sql = neon(process.env.DATABASE_URL!);

export async function getMeetings(
  date?: string | null,
  query?: string,
  page = 1,
): Promise<SacramentMeeting[]> {
  const limit = 5;
  const offset = (page - 1) * limit;

  if (date) {
    const rows = await sql`
      SELECT *
      FROM meetings
      WHERE date = ${date}
      ORDER BY date
    `;

    return rows as SacramentMeeting[];
  }

  if (query) {
    const rows = await sql`
      SELECT *
      FROM meetings
      WHERE
        presiding ILIKE ${"%" + query + "%"}
        OR conducting ILIKE ${"%" + query + "%"}
        OR meeting_type ILIKE ${"%" + query + "%"}
        OR speakers::text ILIKE ${"%" + query + "%"}
      ORDER BY date
      LIMIT ${limit}
      OFFSET ${offset}
    `;

    return rows as SacramentMeeting[];
  }

  const rows = await sql`
    SELECT *
    FROM meetings
    ORDER BY date
    LIMIT ${limit}
    OFFSET ${offset}
  `;

  return rows as SacramentMeeting[];
}

export async function getMeetingById(
  id: number,
): Promise<SacramentMeeting | null> {
  const rows = await sql`
    SELECT *
    FROM meetings
    WHERE id = ${id}
  `;

  if (rows.length === 0) {
    return null;
  }

  return mapMeeting(rows[0]);
}

// Week 04
export async function addMeeting() {
  throw new Error("Not implemented yet.");
}

export async function updateMeeting() {
  throw new Error("Not implemented yet.");
}

export async function deleteMeeting() {
  throw new Error("Not implemented yet.");
}

function mapMeeting(row: any): SacramentMeeting {
  return {
    id: row.id,
    date: row.date.toISOString().split("T")[0],
    meetingType: row.meeting_type,
    presiding: row.presiding,
    conducting: row.conducting,
    announcements: row.announcements ?? [],
    openingHymn: row.opening_hymn,
    openingPrayer: row.opening_prayer,
    wardBusiness: row.ward_business ?? [],
    stakeBusiness: row.stake_business,
    sacramentHymn: row.sacrament_hymn,
    speakers: row.speakers ?? [],
    closingHymn: row.closing_hymn,
    closingPrayer: row.closing_prayer,
  };
}

export async function getMeetingCount(query?: string): Promise<number> {
  if (query) {
    const result = await sql`
      SELECT COUNT(*)
      FROM meetings
      WHERE
        presiding ILIKE ${"%" + query + "%"}
        OR conducting ILIKE ${"%" + query + "%"}
        OR meeting_type ILIKE ${"%" + query + "%"}
        OR speakers::text ILIKE ${"%" + query + "%"}
    `;

    return Number(result[0].count);
  }

  const result = await sql`
    SELECT COUNT(*)
    FROM meetings
  `;

  return Number(result[0].count);
}
