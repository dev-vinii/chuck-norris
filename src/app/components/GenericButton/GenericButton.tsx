export default function GenericButton({phrase}:any) {
  return (
    <div className="h-14 bg-custom-button w-72 text-center flex items-center justify-center rounded-3xl tablet:mb-10 desktop:mt-10 laptop:mt-10 desktop:mb-10 laptop:mb-10 ml-5 mr-5 text-xl cursor-pointer">
      {phrase}
    </div>
  );
}

