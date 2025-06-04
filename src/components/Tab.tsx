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
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-6 px-2">
        <div className="flex flex-wrap justify-center sm:inline-flex p-1 rounded-lg bg-gray-100 w-full max-w-[100%] overflow-x-auto sm:overflow-visible">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative py-1.5 sm:py-2 px-3 sm:px-4 md:px-6 text-xs sm:text-sm font-medium transition-all duration-200 ease-in-out whitespace-nowrap
                ${index !== tabs.length - 1 ? 'mr-1 mb-1 sm:mb-0' : ''}
                ${
                  activeTab === tab.id
                    ? 'text-white bg-primary shadow-sm rounded-md'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary/90 hover:bg-white/50 dark:hover:bg-gray-700/50 rounded-md'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-2 p-4 bg-white rounded-lg shadow-sm">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
