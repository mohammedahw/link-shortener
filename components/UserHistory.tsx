import { useSession } from "next-auth/react";

export default function UserHistory() {
  const { data: session } = useSession();

  if (!session) {
    return <span>Sign in to see your history.</span>;
  }

  return (
    <>
      <div>History</div>
    </>
  );
}
