import uploadSvg from "../assets/upload.svg";

type Props = React.ComponentProps<"input"> & {
  fileName?: string | null;
};

export function Upload({ fileName = null, ...rest }: Props) {
  return (
    <div>
      <legend className="uppercase text-xxs mb-2 text-gray-200 ">
        Comprovante
      </legend>

      <div className="w-full h-12 rounded-lg flex items-center border border-gray-300 text-sm text-gray-100 bg-transparent outline-none">
        <input type="file" id="upload" className="hidden" {...rest} />

        <span className="text-sm text-gray-100 flex-1 pl-4 ">
          {fileName ?? "Selecione um arquivo"}
        </span>
        <label
          htmlFor="upload"
          className="flex h-12 px-4 items-center bg-green-100 rounded-lg disabled:opacity-50 hover:bg-green-200 transition ease-linear cursor-pointer"
        >
          <img src={uploadSvg} alt="Upload" />
        </label>
      </div>
    </div>
  );
}
