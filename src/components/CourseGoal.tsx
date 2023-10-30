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
  id: number;
  title: string;
  description: string;
  onDelete: (id: number) => void;
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
  id,
  title,
  description,
  onDelete,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}
