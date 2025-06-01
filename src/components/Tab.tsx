import React, { useState } from "react";

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

interface TabsProps {
  tabs: Tab[];
}

export default function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="">
      {/* Tab Navigation */}
      <div className="border-b border-primary/20 flex justify-center px-5 bg-background">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative py-2 px-8 mx-1 text-sm font-medium transition-all duration-300
                ${
                  activeTab === tab.id
                    ? "text-primary bg-primary/5 hover:bg-primary/10"
                    : "text-gray-600 hover:text-primary hover:bg-primary/5"
                }
              `}
            >
              {tab.label}

              {/* underline */}
              {activeTab === tab.id && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-4 p-6 bg-background">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
