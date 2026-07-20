import type { SacramentMeeting } from "./types";

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: "2026-05-03",
    meetingType: "regular",
    presiding: "Bishop Smith",
    conducting: "Brother Jones",
    announcements: ["Ward temple night: May 10"],
    openingHymn: {
      number: 2,
      title: "The Spirit of God",
    },
    openingPrayer: "Sister Williams",
    wardBusiness: [
      {
        description: "Sustaining of new Primary president",
      },
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 169,
      title: "In Remembrance of Thy Suffering",
    },
    speakers: [
      {
        name: "Sister Brown",
        topic: "Faith in Jesus Christ",
        type: "speaker",
      },
      {
        name: "Youth Choir",
        topic: "Musical Number",
        type: "musical-number",
      },
    ],
    closingHymn: {
      number: 31,
      title: "O God, Our Help in Ages Past",
    },
    closingPrayer: "Brother Davis",
  },

  {
    id: 2,
    date: "2026-05-10",
    meetingType: "testimony",
    presiding: "Bishop Smith",
    conducting: "Brother Allen",
    announcements: ["Ward picnic on Saturday"],
    openingHymn: {
      number: 19,
      title: "We Thank Thee, O God, for a Prophet",
    },
    openingPrayer: "Brother Green",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 174,
      title: "While of These Emblems We Partake",
    },
    speakers: [],
    closingHymn: {
      number: 152,
      title: "God Be with You Till We Meet Again",
    },
    closingPrayer: "Sister Johnson",
  },

  {
    id: 3,
    date: "2026-05-17",
    meetingType: "regular",
    presiding: "President Wilson",
    conducting: "Brother Clark",
    announcements: ["Youth conference registration now open"],
    openingHymn: {
      number: 5,
      title: "High on the Mountain Top",
    },
    openingPrayer: "Brother White",
    wardBusiness: [
      {
        description: "Release of Elders Quorum instructor",
      },
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 170,
      title: "God, Our Father, Hear Us Pray",
    },
    speakers: [
      {
        name: "Sister Taylor",
        topic: "Hope Through Jesus Christ",
        type: "speaker",
      },
      {
        name: "Brother Evans",
        topic: "Serving Others",
        type: "speaker",
      },
    ],
    closingHymn: {
      number: 85,
      title: "How Firm a Foundation",
    },
    closingPrayer: "Sister Adams",
  },

  {
    id: 4,
    date: "2026-05-24",
    meetingType: "stake",
    presiding: "Stake President Harris",
    conducting: "Brother Lewis",
    announcements: ["Stake conference next week"],
    openingHymn: {
      number: 84,
      title: "Faith of Our Fathers",
    },
    openingPrayer: "Brother Moore",
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: {
      number: 175,
      title: "O God, the Eternal Father",
    },
    speakers: [
      {
        name: "Stake President Harris",
        topic: "Strengthening Our Faith",
        type: "speaker",
      },
    ],
    closingHymn: {
      number: 134,
      title: "I Believe in Christ",
    },
    closingPrayer: "Sister Nelson",
  },

  {
    id: 5,
    date: "2026-05-31",
    meetingType: "general",
    presiding: "Area Authority",
    conducting: "Brother King",
    announcements: ["General leadership broadcast"],
    openingHymn: {
      number: 66,
      title: "Rejoice, the Lord Is King!",
    },
    openingPrayer: "Brother Carter",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 190,
      title: "In Memory of the Crucified",
    },
    speakers: [
      {
        name: "Area Authority",
        topic: "Following the Savior",
        type: "speaker",
      },
      {
        name: "Ward Choir",
        topic: "Musical Number",
        type: "musical-number",
      },
    ],
    closingHymn: {
      number: 136,
      title: "I Know That My Redeemer Lives",
    },
    closingPrayer: "Sister Walker",
  },
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) {
    return meetings.filter((meeting) => meeting.date === date);
  }

  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find((meeting) => meeting.id === id) ?? null;
}
