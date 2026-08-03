/* Plain div + img on purpose — do NOT swap in shadcn Avatar.
   Headshot on white-filled disc with gold + blue ring. */
export function AvatarRing() {
  return (
    <div className="avatar-ring relative z-3 mx-auto -mt-16 h-40 w-40 rounded-full p-1 shadow-card">
      <div className="h-full w-full overflow-hidden rounded-full bg-white">
        <img
          className="block h-full w-full object-cover"
          src="/assets/derek-hulin.jpg"
          alt="Derek Hulin"
        />
      </div>
    </div>
  )
}
