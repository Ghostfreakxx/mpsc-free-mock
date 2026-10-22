import { contentRevision, contentScope } from "../data/reviewed-content";
import { downloadPacks } from "../data/practice-data";
import DownloadLibrary from "./download-library";

export default function DownloadsPage() {
  return <DownloadLibrary packs={downloadPacks()} contentScope={contentScope} contentRevision={contentRevision} />;
}
