
import Button from "@/components/Button";
import Card from "@/components/Card"
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />
      <div className="flex flex-col items-start gap-4 mt-6">
        <Button title="Small Rounded-sm" styles="bg-blue-500 text-sm rounded-sm" />
        <Button title="Medium Rounded-md" styles="bg-green-500 text-base rounded-md" />
        <Button title="Large Rounded-full" styles="bg-red-500 text-lg rounded-full" />
      </div>
    </div>
  )
}
export default Landing