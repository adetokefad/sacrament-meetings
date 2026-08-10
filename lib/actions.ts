"use server";

import { z } from "zod";
import {
  addMeeting,
  updateMeeting as updateMeetingDb,
  deleteMeeting as deleteMeetingDb,
} from "@/lib/meetings-db";
import type { SacramentMeeting } from "@/lib/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
  message?: string;
  errors?: {
    date?: string[];
    meetingType?: string[];
    presiding?: string[];
    conducting?: string[];
    openingHymnNumber?: string[];
    openingHymnTitle?: string[];
    openingPrayer?: string[];
    sacramentHymnNumber?: string[];
    sacramentHymnTitle?: string[];
    closingHymnNumber?: string[];
    closingHymnTitle?: string[];
    closingPrayer?: string[];
  };
};

const MeetingFormSchema = z.object({
  date: z.string().min(1, "Date is required."),
  meetingType: z.enum(["testimony", "regular", "stake", "general"]),
  presiding: z.string().min(1, "Presiding officer is required."),
  conducting: z.string().min(1, "Conducting officer is required."),

  openingHymnNumber: z.coerce
    .number()
    .int()
    .positive("Enter a valid hymn number."),

  openingHymnTitle: z.string().min(1, "Opening hymn title is required."),

  openingPrayer: z.string().min(1, "Opening prayer is required."),

  sacramentHymnNumber: z.coerce
    .number()
    .int()
    .positive("Enter a valid hymn number."),

  sacramentHymnTitle: z.string().min(1, "Sacrament hymn title is required."),

  closingHymnNumber: z.coerce
    .number()
    .int()
    .positive("Enter a valid hymn number."),

  closingHymnTitle: z.string().min(1, "Closing hymn title is required."),

  closingPrayer: z.string().min(1, "Closing prayer is required."),
});

export async function createMeeting(
  prevState: State,
  formData: FormData,
): Promise<State> {
  const rawData = Object.fromEntries(formData.entries());

  const validatedFields = MeetingFormSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      message: "Please correct the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = validatedFields.data;

  const meeting: Omit<SacramentMeeting, "id"> = {
    date: data.date,
    meetingType: data.meetingType,
    presiding: data.presiding,
    conducting: data.conducting,
    announcements: [],
    openingHymn: {
      number: data.openingHymnNumber,
      title: data.openingHymnTitle,
    },
    openingPrayer: data.openingPrayer,
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: data.sacramentHymnNumber,
      title: data.sacramentHymnTitle,
    },
    speakers: [],
    closingHymn: {
      number: data.closingHymnNumber,
      title: data.closingHymnTitle,
    },
    closingPrayer: data.closingPrayer,
  };

  try {
    await addMeeting(meeting);
  } catch (error) {
    console.error("Failed to create meeting:", error);
    throw new Error("Unable to create the meeting.");
  }

  revalidatePath("/meetings");
  redirect("/meetings");
}

export async function updateMeeting(
  id: number,
  prevState: State,
  formData: FormData,
): Promise<State> {
  const rawData = Object.fromEntries(formData.entries());

  const validatedFields = MeetingFormSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      message: "Please correct the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = validatedFields.data;

  const meeting: Omit<SacramentMeeting, "id"> = {
    date: data.date,
    meetingType: data.meetingType,
    presiding: data.presiding,
    conducting: data.conducting,
    announcements: [],
    openingHymn: {
      number: data.openingHymnNumber,
      title: data.openingHymnTitle,
    },
    openingPrayer: data.openingPrayer,
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: data.sacramentHymnNumber,
      title: data.sacramentHymnTitle,
    },
    speakers: [],
    closingHymn: {
      number: data.closingHymnNumber,
      title: data.closingHymnTitle,
    },
    closingPrayer: data.closingPrayer,
  };

  try {
    await updateMeetingDb(id, meeting);
  } catch (error) {
    console.error("Failed to update meeting:", error);
    throw new Error("Unable to update the meeting.");
  }

  revalidatePath("/meetings");
  revalidatePath(`/meetings/${id}`);

  redirect("/meetings");
}

export async function deleteMeeting(id: number): Promise<void> {
  try {
    await deleteMeetingDb(id);
  } catch (error) {
    console.error("Failed to delete meeting:", error);
    throw new Error("Unable to delete the meeting.");
  }

  revalidatePath("/meetings");
}
