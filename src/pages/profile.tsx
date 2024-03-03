import AvatarSelector from "../components/profile/avatar-selector"
import BioForm from "../components/profile/bio-form";

export default function Profile() {
  return (
    <div className="bg-white w-3/4 border border-solid border-black rounded p-4 shadow-md">
      <h1 className="text-3xl text-blue-700">اطلاعات کاربری</h1>

      <div className="flex pt-8 h-64">
        <AvatarSelector />

        <BioForm />
      </div>
    </div>
  );
}
