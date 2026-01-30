
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const ServiceDropdownCard = ({ item, index }: { item: any; index: number }) => {
  return (
    <Link
      key={item.label}
      href={item.href}
      className="group relative flex flex-col bg-white gap-2 rounded-2xl border border-gray-100 hover:bg-gray-50 hover:shadow-lg transition"
    >
      <div className="flex items-center">
        <div className="w-40 h-38 shrink-0 rounded-l-2xl flex items-center justify-center overflow-hidden border border-gray-200">
          {item.icon && (
            <Image
              src={item.icon}
              alt={item.label}
              width={200}
              height={200}
              className="object-cover h-full w-full"
              priority
            />
          )}
        </div>
        <div className="flex px-4 py-3 flex-col flex-1">
          <span className="font-semibold flex items-center gap-2">
            <span className="text-brand-primary font-bold">{index + 1}.</span>
            {item.label}
          </span>
          <p className="text-xs text-gray-500">
            Discover {item.label.toLowerCase()}
          </p>
        </div>
      </div>

      <FiArrowRight className="w-5 absolute top-2 right-2 text-neutral-600 -rotate-45" />
    </Link>
  );
};

export default ServiceDropdownCard;
