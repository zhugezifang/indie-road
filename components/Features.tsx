import React from "react";

const Features = ({ dictionary: dic }: { dictionary: any }) => {
  const features = [
    {
      title: dic.feature.feature1.title,
      content: dic.feature.feature1.description,
    },
    {
      title: dic.feature.feature2.title,
      content: dic.feature.feature3.description,
    },
    {
      title: dic.feature.feature3.title,
      content: dic.feature.feature3.description,
    },
    {
      title: dic.feature.feature4.title,
      content: dic.feature.feature4.description,
    },
    {
      title: dic.feature.feature5.title,
      content: dic.feature.feature5.description,
    },
    {
      title: dic.feature.feature6.title,
      content: dic.feature.feature6.description,
    },
  ];
  return (
    <section
      id="features"
      className="flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto md:gap-14 py-6"
    >
      <h2 className="text-4xl text-center font-bold">{dic.feature.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {features?.map((feature, index) => (
          <div
            key={feature.title}
            className={`
              flex flex-col items-center text-center px-8 py-6 border-b
              ${index === 0 ? "md:border-r" : ""}
              ${index === 1 ? "lg:border-r" : ""}
              ${index === 2 ? "md:border-r lg:border-r-0" : ""}
              ${index === 3 ? "lg:border-b-0 lg:border-r" : ""}
              ${index === 4 ? "md:border-b-0 md:border-r" : ""}
              ${index === 5 ? "border-b-0 border-r-0" : ""}
            `}
          >
            <h2 className={"text-xl font-semibold mb-2"}>{feature.title}</h2>
            <p className="text-slate-700 dark:text-slate-400">
              {feature.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
