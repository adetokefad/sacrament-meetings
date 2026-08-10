"use client";

import { useActionState } from "react";
import { createMeeting, type State } from "@/lib/actions";

const initialState: State = {
  message: "",
  errors: {},
};

export default function NewMeetingForm() {
  const [state, formAction, isPending] = useActionState(
    createMeeting,
    initialState,
  );

  return (
    <div className="mx-auto max-w-3xl p-8">
      <h1 className="mb-6 text-3xl font-bold">Create New Meeting</h1>

      {state.message && (
        <p
          className="mb-4 rounded bg-red-100 p-3 text-red-700"
          aria-live="polite"
        >
          {state.message}
        </p>
      )}

      <form action={formAction} className="space-y-6">
        {/* Date */}
        <div>
          <label htmlFor="date" className="mb-1 block font-medium">
            Date
          </label>

          <input
            id="date"
            name="date"
            type="date"
            className="w-full rounded border p-2"
            aria-describedby="date-error"
          />

          <p
            id="date-error"
            className="mt-1 text-sm text-red-600"
            aria-live="polite"
          >
            {state.errors?.date?.[0]}
          </p>
        </div>

        {/* Meeting Type */}
        <div>
          <label htmlFor="meetingType" className="mb-1 block font-medium">
            Meeting Type
          </label>

          <select
            id="meetingType"
            name="meetingType"
            className="w-full rounded border p-2"
            aria-describedby="meetingType-error"
            defaultValue=""
          >
            <option value="" disabled>
              Select meeting type
            </option>
            <option value="regular">Regular</option>
            <option value="testimony">Testimony</option>
            <option value="stake">Stake</option>
            <option value="general">General</option>
          </select>

          <p
            id="meetingType-error"
            className="mt-1 text-sm text-red-600"
            aria-live="polite"
          >
            {state.errors?.meetingType?.[0]}
          </p>
        </div>

        {/* Presiding */}
        <div>
          <label htmlFor="presiding" className="mb-1 block font-medium">
            Presiding Officer
          </label>

          <input
            id="presiding"
            name="presiding"
            type="text"
            className="w-full rounded border p-2"
            aria-describedby="presiding-error"
          />

          <p
            id="presiding-error"
            className="mt-1 text-sm text-red-600"
            aria-live="polite"
          >
            {state.errors?.presiding?.[0]}
          </p>
        </div>

        {/* Conducting */}
        <div>
          <label htmlFor="conducting" className="mb-1 block font-medium">
            Conducting Officer
          </label>

          <input
            id="conducting"
            name="conducting"
            type="text"
            className="w-full rounded border p-2"
            aria-describedby="conducting-error"
          />

          <p
            id="conducting-error"
            className="mt-1 text-sm text-red-600"
            aria-live="polite"
          >
            {state.errors?.conducting?.[0]}
          </p>
        </div>

        {/* Opening Hymn */}
        <div>
          <h2 className="mb-3 text-xl font-semibold">Opening Hymn</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="openingHymnNumber"
                className="mb-1 block font-medium"
              >
                Hymn Number
              </label>

              <input
                id="openingHymnNumber"
                name="openingHymnNumber"
                type="number"
                className="w-full rounded border p-2"
                aria-describedby="openingHymnNumber-error"
              />

              <p
                id="openingHymnNumber-error"
                className="mt-1 text-sm text-red-600"
                aria-live="polite"
              >
                {state.errors?.openingHymnNumber?.[0]}
              </p>
            </div>

            <div>
              <label
                htmlFor="openingHymnTitle"
                className="mb-1 block font-medium"
              >
                Hymn Title
              </label>

              <input
                id="openingHymnTitle"
                name="openingHymnTitle"
                type="text"
                className="w-full rounded border p-2"
                aria-describedby="openingHymnTitle-error"
              />

              <p
                id="openingHymnTitle-error"
                className="mt-1 text-sm text-red-600"
                aria-live="polite"
              >
                {state.errors?.openingHymnTitle?.[0]}
              </p>
            </div>
          </div>
        </div>

        {/* Opening Prayer */}
        <div>
          <label htmlFor="openingPrayer" className="mb-1 block font-medium">
            Opening Prayer
          </label>

          <input
            id="openingPrayer"
            name="openingPrayer"
            type="text"
            className="w-full rounded border p-2"
            aria-describedby="openingPrayer-error"
          />

          <p
            id="openingPrayer-error"
            className="mt-1 text-sm text-red-600"
            aria-live="polite"
          >
            {state.errors?.openingPrayer?.[0]}
          </p>
        </div>

        {/* Sacrament Hymn */}
        <div>
          <h2 className="mb-3 text-xl font-semibold">Sacrament Hymn</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="sacramentHymnNumber"
                className="mb-1 block font-medium"
              >
                Hymn Number
              </label>

              <input
                id="sacramentHymnNumber"
                name="sacramentHymnNumber"
                type="number"
                className="w-full rounded border p-2"
                aria-describedby="sacramentHymnNumber-error"
              />

              <p
                id="sacramentHymnNumber-error"
                className="mt-1 text-sm text-red-600"
                aria-live="polite"
              >
                {state.errors?.sacramentHymnNumber?.[0]}
              </p>
            </div>

            <div>
              <label
                htmlFor="sacramentHymnTitle"
                className="mb-1 block font-medium"
              >
                Hymn Title
              </label>

              <input
                id="sacramentHymnTitle"
                name="sacramentHymnTitle"
                type="text"
                className="w-full rounded border p-2"
                aria-describedby="sacramentHymnTitle-error"
              />

              <p
                id="sacramentHymnTitle-error"
                className="mt-1 text-sm text-red-600"
                aria-live="polite"
              >
                {state.errors?.sacramentHymnTitle?.[0]}
              </p>
            </div>
          </div>
        </div>

        {/* Opening Prayer */}
        {/* Closing Hymn */}
        <div>
          <h2 className="mb-3 text-xl font-semibold">Closing Hymn</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="closingHymnNumber"
                className="mb-1 block font-medium"
              >
                Hymn Number
              </label>

              <input
                id="closingHymnNumber"
                name="closingHymnNumber"
                type="number"
                className="w-full rounded border p-2"
                aria-describedby="closingHymnNumber-error"
              />

              <p
                id="closingHymnNumber-error"
                className="mt-1 text-sm text-red-600"
                aria-live="polite"
              >
                {state.errors?.closingHymnNumber?.[0]}
              </p>
            </div>

            <div>
              <label
                htmlFor="closingHymnTitle"
                className="mb-1 block font-medium"
              >
                Hymn Title
              </label>

              <input
                id="closingHymnTitle"
                name="closingHymnTitle"
                type="text"
                className="w-full rounded border p-2"
                aria-describedby="closingHymnTitle-error"
              />

              <p
                id="closingHymnTitle-error"
                className="mt-1 text-sm text-red-600"
                aria-live="polite"
              >
                {state.errors?.closingHymnTitle?.[0]}
              </p>
            </div>
          </div>
        </div>

        {/* Closing Prayer */}
        <div>
          <label htmlFor="closingPrayer" className="mb-1 block font-medium">
            Closing Prayer
          </label>

          <input
            id="closingPrayer"
            name="closingPrayer"
            type="text"
            className="w-full rounded border p-2"
            aria-describedby="closingPrayer-error"
          />

          <p
            id="closingPrayer-error"
            className="mt-1 text-sm text-red-600"
            aria-live="polite"
          >
            {state.errors?.closingPrayer?.[0]}
          </p>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="rounded bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {isPending ? "Creating..." : "Create Meeting"}
        </button>
      </form>
    </div>
  );
}
