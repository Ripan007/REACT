import MainNavigation from "../Components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <div className="bg-red-900 p-6 text-white">
        <p>error occured</p>
        <p>page not found</p>
      </div>
    </>
  );
}

export default ErrorPage;
