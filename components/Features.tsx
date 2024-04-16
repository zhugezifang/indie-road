import React from "react";

const Features = () => {
  const features = [
    {
      title: 'Ability Enhanced',
      content: 'Enhance your product design and UI design thinking',
    },
    {
      title: 'Publicity',
      content: 'You\'ll receive publicity for the work you complete',
    },
    {
      title: 'Elimination Mechanism',
      content: 'If you fail to complete tasks or share results in a timely manner, you may be eliminated from the group',
    },
    {
      title: 'Friends',
      content: 'You will get to know like-minded friends.',
    },
    {
      title: 'Yield Returns',
      content: 'Your investment can yield returns in both the open-source and commercial markets.',
    },
    {
      title: 'indie developer',
      content: 'Experience the directions many independent developers are exploring.',
    }
  ]
  return (
    <section
      id="features"
      className="flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto md:gap-14 py-6"
    >
      <h2 className="text-4xl text-center font-bold">Features</h2>
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
