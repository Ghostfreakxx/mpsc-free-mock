import { subjectDownloadAnchors } from "../data/practice-data";
import CollegeNotesPage from "./college-notes";

export default function Page() {
  return <CollegeNotesPage downloadAnchors={subjectDownloadAnchors()} />;
}
