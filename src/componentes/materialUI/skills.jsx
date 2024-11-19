import IconCloud from "./Cloud.tsx";
 
const skills = [
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "bootstrap",
    "tailwindcss",
    "mongodb",
    "firebase",
    "github",
    "visualstudiocode",
    "npm",
    "figma",
  ];
 
export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={skills} />
    </div>
  );
}

