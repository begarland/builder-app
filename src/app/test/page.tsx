"use client";
import { useEffect, useState } from "react";
import { BuilderComponent, builder } from "@builder.io/react";

// Replace with your Public API Key.
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function Page() {
  const [announcement, setAnnouncement] = useState(null);
  const [bottomBar, setBottomBar] = useState(null);

  useEffect(() => {
    builder
      .get("announcement-bar", {
        userAttributes: {
          // To allow targeting different announcements at different pages (URLs)
          urlPath: window.location.pathname,
        },
      })
      .toPromise()
      .then((announcementBar) => setAnnouncement(announcementBar));

    // builder
    //   .get("bottom-bar", {
    //     userAttributes: {
    //       // To allow targeting different announcements at different pages (URLs)
    //       urlPath: window.location.pathname,
    //     },
    //   })
    //   .toPromise()
    //   .then((bottomBar) => setBottomBar(bottomBar));
  }, []);

  return (
    <>
      {/* Put your header here. */}
      {/* <YourHeader /> */}
      {announcement && (
        <BuilderComponent model="announcement-bar" content={announcement} />
      )}
      <div className="flex h-60 justify-center items-center flex-col">
        <p>woo</p>
      </div>

      <div className="absolute bottom-0 flex justify-center items-center flex-col">
        {announcement && (
          <BuilderComponent model="announcement-bar" content={announcement} />
        )}
      </div>
      {/* Put the rest of your page here. */}
      {/* <TheRestOfYourPage /> */}
    </>
  );
}
