import React from "react";

type Props = {
  children: React.ReactNode;
};

const Sidebar = (props: Props) => {
  return (
    <>
      <div>
        Sidebar
        <main>{props.children}</main>
      </div>
    </>
  );
};

export default Sidebar;
