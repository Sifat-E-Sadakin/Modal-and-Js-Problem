import { headers } from "next/headers";
import { UserAgent } from "@/views/userAgent/userAgent";

const UserAgentPage = () => {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "Unknown User Agent";

  return <UserAgent userAgent={userAgent} />;
};

export default UserAgentPage;
