import Image from 'next/image';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto">
            <Image
              src="/images/profile.png"
              alt="Loading"
              width={80}
              height={80}
              className="w-full h-full object-cover animate-pulse"
              priority
            />
          </div>
          <div className="absolute inset-0 -m-2">
            <div className="w-24 h-24 mx-auto rounded-full border-4 border-gray-200 border-t-indigo-500 animate-spin" />
          </div>
        </div>
        <p className="text-gray-500 animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
