"use client";
import { Tabs } from "keep-react";

const HomeProductPart = () => {
  return (
    <div className="mx-auto max-w-[1280px] mt-[100px]">
      {" "}
      <Tabs aria-label="Tabs" style="pills" className=" space-x-3">
        <Tabs.Item
          active={true}
          title="NEW ARRIVALS"
          style={{ background: "#4A4C6C" }}>
          NEW ARRIVALS content
        </Tabs.Item>
        <Tabs.Item title="WHAT’S TRENDING">WHAT’S TRENDING Container</Tabs.Item>
      </Tabs>
    </div>
  );
};

export default HomeProductPart;
