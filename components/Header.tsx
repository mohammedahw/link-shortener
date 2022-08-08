import AuthButton from "./AuthButton";

export default function Header() {
  return (
    <>
      <div className="flex justify-around mt-16 text-xl">
        <div>Link Shortener</div>
        <div>
          <AuthButton />
        </div>
      </div>
    </>
  );
}
