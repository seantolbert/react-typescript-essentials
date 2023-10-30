import { type PropsWithChildren } from "react";

// type CourseGoalProps = {
//   title: string;
//   description: string;
//   children: ReactNode;
// };

// or

// interface CourseGoalProps {
//   title: string;
//   description: string;
//   children: ReactNode;
// };

// or

type CourseGoalProps = PropsWithChildren<{
  title: string;
  description: string;
}>;
// ^ this type automatically accounts for the children parameter

// const CourseGoal: FC<CourseGoalProps> = ({ title, description, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{description}</p>
//       </div>
//       <button>Delete</button>
//       {children}
//     </article>
//   );
// };

// export default CourseGoal;

// or

export default function CourseGoal({
  title,
  description,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>Delete</button>
    </article>
  );
}
