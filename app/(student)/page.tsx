import { mpscResponseKeyHashes } from "../data/practice-data";
import StudentDashboard from "../student-dashboard";

export default function HomePage() {
  return <StudentDashboard reviewedKeyHashes={mpscResponseKeyHashes()} />;
}
