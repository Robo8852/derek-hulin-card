/* Plain div + img on purpose — do NOT swap in shadcn Avatar.
   Logo on white-filled disc with gold + blue ring. */
export function AvatarRing() {
  return (
    <div className="avatar-ring relative z-3 mx-auto -mt-16 h-40 w-40 rounded-full p-1 shadow-card">
      {/* overflow-hidden: the logo PNG is a white SQUARE — without clipping, its
          corners poke out past the white disc. */}
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white">
        <img
          className="block h-36 w-36 object-contain p-2"
          src="/assets/logo-mark.png"
          alt="Peacock Premier Painting logo"
        />
      </div>
    </div>
  )
}
