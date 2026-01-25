// =============================================================================
// Booked Confirmation Page (/booked)
// =============================================================================
// This page is shown to users after they successfully book a consultation call.
// URL: humhome.co/booked
// =============================================================================

"use client";

import Link from "next/link";

export default function BookedPage() {
  return (
    <div className="bg-[#fefdfb] text-[#454545] min-h-screen">
      
      {/* ===================================================================
          HEADER - Logo
      =================================================================== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <img src="/hum-logo.png" alt="HUM" className="h-6 sm:h-8 w-auto" />
      </div>

      {/* ===================================================================
          HERO SECTION - Confirmation Message
      =================================================================== */}
      <section className="px-4 pt-4 pb-6 sm:pt-8 sm:pb-12 bg-[#fefdfb]">
        <div className="max-w-2xl mx-auto text-center">
          {/* Top Label */}
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#b8926b] mb-4 sm:mb-6">
            BOOKING CONFIRMED
          </p>

          {/* Main Headline */}
          <h1 className="text-[28px] sm:text-[44px] md:text-[52px] font-normal text-[#323B46] leading-[1.15] tracking-tight mb-3 sm:mb-5">
            Congratulations,<br />
            You&apos;re Confirmed!
          </h1>

          {/* Description */}
          <p className="text-[14px] sm:text-[20px] text-[#555] max-w-xl mx-auto mb-4 sm:mb-8 leading-relaxed px-2 sm:px-0">
            Your life is about to get a whole lot easier. All the details for your upcoming call are on their way to your inbox and phone. But first, please review the important materials below.
          </p>
        </div>
      </section>

      {/* ===================================================================
          STEP 1 - Accept Calendar Invite
      =================================================================== */}
      <section className="px-4 py-8 sm:py-16 bg-[#fefdfb]">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#b8926b] mb-2 sm:mb-3 text-center">
            STEP 1: ACCEPT YOUR CALENDAR INVITE
          </p>

          <h2 className="text-[26px] sm:text-[44px] md:text-[52px] font-normal text-[#323B46] leading-tight mb-6 sm:mb-10 text-center">
            Important Details Below
          </h2>

          {/* Calendar Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-sm">
            <h3 className="text-[15px] sm:text-[20px] font-semibold text-[#323B46] mb-2">
              Confirm the calendar invite that was just sent to your email.
            </h3>

            {/* Calendar Invite Preview */}
            <div className="bg-[#fefdfb] rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Calendar Icon */}
                <div className="flex-shrink-0 self-center sm:self-start">
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden w-20 sm:w-28">
                    <div className="bg-[#b8926b] text-white text-xs sm:text-base font-medium py-1.5 sm:py-2 text-center">
                      Jan
                    </div>
                    <div className="py-3 sm:py-4 text-center bg-white">
                      <div className="text-3xl sm:text-5xl font-light text-[#323B46] leading-none">1</div>
                      <div className="text-xs sm:text-base text-[#888] mt-1">Thur</div>
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-[14px] sm:text-[17px] text-[#323B46] mb-2 sm:mb-3">
                    Your Consultation is Booked | HUM
                  </h4>
                  <div className="space-y-1 sm:space-y-1.5 text-[12px] sm:text-[14px]">
                    <div className="flex">
                      <span className="text-[#888] w-12 sm:w-14 flex-shrink-0">When</span>
                      <span className="text-[#555]">Date of your appointment here</span>
                    </div>
                    <div className="flex">
                      <span className="text-[#888] w-12 sm:w-14 flex-shrink-0">Where</span>
                      <span className="text-[#555] truncate">https://us06web.zoom.us/j/...</span>
                    </div>
                    <div className="flex">
                      <span className="text-[#888] w-12 sm:w-14 flex-shrink-0">Who</span>
                      <span className="text-[#555]">Your Name, Pedro*</span>
                    </div>
                  </div>

                  {/* RSVP Buttons */}
                  <div className="flex gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                    <button className="flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#6b8e5e] text-white text-[11px] sm:text-[13px] font-medium rounded-lg">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Yes
                    </button>
                    <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-[#ddd] text-[#555] text-[11px] sm:text-[13px] font-medium rounded-lg">
                      Maybe
                    </button>
                    <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-[#ddd] text-[#555] text-[11px] sm:text-[13px] font-medium rounded-lg">
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[12px] sm:text-[14px] text-[#555] leading-relaxed">
              <span className="font-semibold">Why this matters:</span> Confirming your calendar invite ensures we have your appointment locked in and you&apos;ll receive all the important details and reminders leading up to our call.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================
          STEP 2 - Download Pre-Call Guide
      =================================================================== */}
      <section className="px-4 py-8 sm:py-16 bg-[#fefdfb]">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#b8926b] mb-2 sm:mb-3">
            STEP 2: EVERYTHING YOU NEED TO KNOW
          </p>

          <h2 className="text-[26px] sm:text-[44px] md:text-[52px] font-normal text-[#323B46] leading-tight mb-6 sm:mb-10">
            Download Your<br />
            Pre-Call Guide
          </h2>

          {/* Download Card */}
          <div className="bg-[#ebe6df] rounded-2xl sm:rounded-3xl p-6 sm:p-10">
            <p className="text-[14px] sm:text-[20px] text-[#555] mb-5 sm:mb-8 leading-relaxed">
              This guide contains everything you need to know to get the absolute most value from our call.
            </p>

            <a
              href="#"
              className="inline-block px-6 sm:px-10 py-3.5 sm:py-4 bg-[#3d3d3d] text-white hover:bg-[#2a2a2a] font-medium rounded-full transition-colors text-[10px] sm:text-[12px] uppercase tracking-[0.15em]"
            >
              Download the Pre-Call PDF
            </a>
          </div>
        </div>
      </section>

      {/* ===================================================================
          PERSONAL NOTE - Message from Founder
      =================================================================== */}
      <section className="px-4 py-8 sm:py-16 bg-[#fefdfb]">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#ebe6df] rounded-2xl sm:rounded-3xl p-5 sm:p-10">
            <h2 className="text-[24px] sm:text-[36px] md:text-[42px] font-normal text-[#323B46] leading-tight mb-5 sm:mb-8 text-center">
              A Personal Note From<br />
              Our Founder <span className="inline-block">❤️</span>
            </h2>

            <div className="text-[13px] sm:text-[20px] text-[#444] space-y-3 sm:space-y-4 leading-relaxed">
              <p>
                I wanted to take a moment to personally thank you for scheduling a call with us.
              </p>

              <p>
                I know how valuable your time is, and I&apos;m genuinely excited for the possibility of working together.
              </p>

              <p>
                My business partners and I started this company for a simple reason: to bring families closer together.
              </p>

              <p>
                We saw too many brilliant, driven moms, people managing everything for everyone, silently struggling at home.
              </p>

              <p>
                They were giving their all, but felt like they were losing themselves in the process.
              </p>

              <p>
                Our mission is to change that. We help busy moms bring calm and order to their homes so they can be truly present with what matters.
              </p>

              <p>
                This journey, however, is a partnership. Our system is the vehicle, but your commitment is the fuel.
              </p>

              <p>
                If you&apos;re a mom dedicated to your family, and ready to commit to a process that will bring your family closer together, then I believe we are the right fit for you.
              </p>

              <p>
                My team and I can&apos;t wait to speak with you.
              </p>

              <p className="pt-1 sm:pt-2">
                Warmly,
              </p>

              {/* Founder Signature */}
              <div className="pt-1">
                <p className="font-semibold text-[#323B46]">-Pedro</p>
                <p className="text-[#666]">Co-Founder</p>
              </div>

              {/* Founder Photo */}
              <div className="pt-1 sm:pt-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
                  <img
                    src="/pedro-headshot.png"
                    alt="Pedro - Co-Founder"
                    className="w-full h-full object-cover object-top scale-125"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          FOOTER
      =================================================================== */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 bg-[#fefdfb] text-[#454545]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <img src="/hum-logo.png" alt="HUM" className="h-5 sm:h-6 w-auto" />
            <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2">
              <Link href="/privacy-policy" className="text-[10px] sm:text-xs text-[#999] hover:text-[#666] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-[10px] sm:text-xs text-[#999] hover:text-[#666] transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="text-[10px] sm:text-xs text-[#999] hover:text-[#666] transition-colors">
                Disclaimer
              </Link>
              <Link href="/cookie-policy" className="text-[10px] sm:text-xs text-[#999] hover:text-[#666] transition-colors">
                Cookie Policy
              </Link>
            </div>
            <p className="text-[10px] sm:text-xs text-[#bbb]">
              © {new Date().getFullYear()} HUM
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
