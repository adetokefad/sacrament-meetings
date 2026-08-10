"use client";

import { useActionState } from "react";
import Link from "next/link";
import { updateMeeting, type State } from "@/lib/actions";
import type { SacramentMeeting } from "@/lib/types";

interface Props {
  meeting: SacramentMeeting;
}

const initialState: State = {
  message: "",
  errors: {},
};

export default function EditMeetingForm({ meeting }: Props) {
  const updateMeetingWithId = updateMeeting.bind(null, meeting.id);

  const [state, formAction, isPending] = useActionState(
    updateMeetingWithId,
    initialState,
  );

  return (
    <div className="mx-auto max-w-4xl p-8">
      <div className="mb-8">
        <Link
          href="/meetings"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to Meetings
        </Link>

        <h1 className="mt-4 text-3xl font-bold text-gray-900">Edit Meeting</h1>

        <p className="mt-2 text-gray-600">
          Update the details for this sacrament meeting.
        </p>
      </div>

      <form
        action={formAction}
        className="space-y-8 rounded-lg bg-white p-8 shadow"
      >
        {state.message && (
          <div
            aria-live="polite"
            className="rounded-md bg-red-50 p-4 text-sm text-red-700"
          >
            {state.message}
          </div>
        )}

        {/* Meeting Information */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            Meeting Information
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Date */}
            <div>
              <label
                htmlFor="date"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Date
              </label>

              <input
                id="date"
                name="date"
                type="date"
                required
                defaultValue={meeting.date}
                aria-describedby="date-error"
                className="w-full rounded-md border border-gray-300 px-3 py-2"
              />

              <p
                id="date-error"
                aria-live="polite"
                className="mt-1 text-sm text-red-600"
              >
                {state.errors?.date?.[0]}
              </p>
            </div>

            {/* Meeting Type */}
            <div>
              <label
                htmlFor="meetingType"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Meeting Type
              </label>

              <select
                id="meetingType"
                name="meetingType"
                required
                defaultValue={meeting.meetingType}
                aria-describedby="meetingType-error"
                className="w-full rounded-md border border-gray-300 px-3 py-2"
              >
                <option value="regular">Regular</option>
                <option value="testimony">Testimony</option>
                <option value="stake">Stake</option>
                <option value="general">General</option>
              </select>

              <p
                id="meetingType-error"
                aria-live="polite"
                className="mt-1 text-sm text-red-600"
              >
                {state.errors?.meetingType?.[0]}
              </p>
            </div>

            {/* Presiding */}
            <div>
              <label
                htmlFor="presiding"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Presiding
              </label>

              <input
                id="presiding"
                name="presiding"
                type="text"
                required
                defaultValue={meeting.presiding}
                aria-describedby="presiding-error"
                className="w-full rounded-md border border-gray-300 px-3 py-2"
              />

              <p
                id="presiding-error"
                aria-live="polite"
                className="mt-1 text-sm text-red-600"
              >
                {state.errors?.presiding?.[0]}
              </p>
            </div>

            {/* Conducting */}
            <div>
              <label
                htmlFor="conducting"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Conducting
              </label>

              <input
                id="conducting"
                name="conducting"
                type="text"
                required
                defaultValue={meeting.conducting}
                aria-describedby="conducting-error"
                className="w-full rounded-md border border-gray-300 px-3 py-2"
              />

              <p
                id="conducting-error"
                aria-live="polite"
                className="mt-1 text-sm text-red-600"
              >
                {state.errors?.conducting?.[0]}
              </p>
            </div>
          </div>
        </section>

        {/* Opening */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-gray-900">Opening</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="openingHymnNumber"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Opening Hymn Number
              </label>

              <input
                id="openingHymnNumber"
                name="openingHymnNumber"
                type="number"
                min="1"
                required
                defaultValue={meeting.openingHymn.number}
                aria-describedby="openingHymnNumber-error"
                className="w-full rounded-md border border-gray-300 px-3 py-2"
              />

              <p
                id="openingHymnNumber-error"
                aria-live="polite"
                className="mt-1 text-sm text-red-600"
              >
                {state.errors?.openingHymnNumber?.[0]}
              </p>
            </div>

            <div>
              <label
                htmlFor="openingHymnTitle"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Opening Hymn Title
              </label>

              <input
                id="openingHymnTitle"
                name="openingHymnTitle"
                type="text"
                required
                defaultValue={meeting.openingHymn.title}
                aria-describedby="openingHymnTitle-error"
                className="w-full rounded-md border border-gray-300 px-3 py-2"
              />

              <p
                id="openingHymnTitle-error"
                aria-live="polite"
                className="mt-1 text-sm text-red-600"
              >
                {state.errors?.openingHymnTitle?.[0]}
              </p>
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="openingPrayer"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Opening Prayer
              </label>

              <input
                id="openingPrayer"
                name="openingPrayer"
                type="text"
                required
                defaultValue={meeting.openingPrayer}
                aria-describedby="openingPrayer-error"
                className="w-full rounded-md border border-gray-300 px-3 py-2"
              />

              <p
                id="openingPrayer-error"
                aria-live="polite"
                className="mt-1 text-sm text-red-600"
              >
                {state.errors?.openingPrayer?.[0]}
              </p>
            </div>
          </div>
        </section>

        {/* Sacrament Hymn */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            Sacrament Hymn
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="sacramentHymnNumber"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Hymn Number
              </label>

              <input
                id="sacramentHymnNumber"
                name="sacramentHymnNumber"
                type="number"
                min="1"
                required
                defaultValue={meeting.sacramentHymn.number}
                aria-describedby="sacramentHymnNumber-error"
                className="w-full rounded-md border border-gray-300 px-3 py-2"
              />

              <p
                id="sacramentHymnNumber-error"
                aria-live="polite"
                className="mt-1 text-sm text-red-600"
              >
                {state.errors?.sacramentHymnNumber?.[0]}
              </p>
            </div>

            <div>
              <label
                htmlFor="sacramentHymnTitle"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Hymn Title
              </label>

              <input
                id="sacramentHymnTitle"
                name="sacramentHymnTitle"
                type="text"
                required
                defaultValue={meeting.sacramentHymn.title}
                aria-describedby="sacramentHymnTitle-error"
                className="w-full rounded-md border border-gray-300 px-3 py-2"
              />

              <p
                id="sacramentHymnTitle-error"
                aria-live="polite"
                className="mt-1 text-sm text-red-600"
              >
                {state.errors?.sacramentHymnTitle?.[0]}
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-gray-900">Closing</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="closingHymnNumber"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Closing Hymn Number
              </label>

              <input
                id="closingHymnNumber"
                name="closingHymnNumber"
                type="number"
                min="1"
                required
                defaultValue={meeting.closingHymn.number}
                aria-describedby="closingHymnNumber-error"
                className="w-full rounded-md border border-gray-300 px-3 py-2"
              />

              <p
                id="closingHymnNumber-error"
                aria-live="polite"
                className="mt-1 text-sm text-red-600"
              >
                {state.errors?.closingHymnNumber?.[0]}
              </p>
            </div>

            <div>
              <label
                htmlFor="closingHymnTitle"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Closing Hymn Title
              </label>

              <input
                id="closingHymnTitle"
                name="closingHymnTitle"
                type="text"
                required
                defaultValue={meeting.closingHymn.title}
                aria-describedby="closingHymnTitle-error"
                className="w-full rounded-md border border-gray-300 px-3 py-2"
              />

              <p
                id="closingHymnTitle-error"
                aria-live="polite"
                className="mt-1 text-sm text-red-600"
              >
                {state.errors?.closingHymnTitle?.[0]}
              </p>
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="closingPrayer"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Closing Prayer
              </label>

              <input
                id="closingPrayer"
                name="closingPrayer"
                type="text"
                required
                defaultValue={meeting.closingPrayer}
                aria-describedby="closingPrayer-error"
                className="w-full rounded-md border border-gray-300 px-3 py-2"
              />

              <p
                id="closingPrayer-error"
                aria-live="polite"
                className="mt-1 text-sm text-red-600"
              >
                {state.errors?.closingPrayer?.[0]}
              </p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <div className="flex gap-4 border-t pt-6">
          <button
            type="submit"
            disabled={isPending}
            className="rounded-md bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isPending ? "Saving..." : "Save Changes"}
          </button>

          <Link
            href="/meetings"
            className="rounded-md border border-gray-300 px-5 py-2.5 font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
