import ReactGridLayoutDemo from "@/components/features/ReactGridLayoutDemo";
import React from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
function page() {
    return (
        <main className="flex h-screen w-screen overflow-x-hidden">
            <ReactGridLayoutDemo />
        </main>
    );
}

export default page;
