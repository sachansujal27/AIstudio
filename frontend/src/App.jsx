import { useState } from "react";
import {
  Sparkles,
  Upload,
  Image,
  Video,
  Clock,
  Download,
  WandSparkles,
  House,
  Utensils,
  Footprints,
  GlassWater,
  Menu,
  X,
  Play,
  CheckCircle,
} from "lucide-react";

const categories = [
  {
    name: "Food & Cooking",
    icon: Utensils,
    description: "Food, recipes and cooking ads",
  },
  {
    name: "House & Property",
    icon: House,
    description: "Homes, rooms and property ads",
  },
  {
    name: "Shoes & Footwear",
    icon: Footprints,
    description: "Shoes and fashion products",
  },
  {
    name: "Drinks & Beverages",
    icon: GlassWater,
    description: "Juices, drinks and beverages",
  },
];

function App() {
  const [category, setCategory] = useState("Shoes & Footwear");
  const [prompt, setPrompt] = useState("");
  const [duration, setDuration] = useState("10 seconds");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  function handleImage(event) {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  }

  function handleGenerate() {
    if (!imageFile) {
      alert("Please upload a product image first.");
      return;
    }

    if (!prompt.trim()) {
      alert("Please enter an advertisement description.");
      return;
    }

    alert(
      "Your input is ready. We will connect the real AI generation backend next.",
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="rounded-xl bg-violet-600 p-2 text-white">
              <WandSparkles size={23} />
            </div>
            <span className="text-xl font-bold">
              AdGen <span className="text-violet-600">AI</span>
            </span>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#create" className="font-medium text-violet-700">
              Create Ad
            </a>
            <a
              href="#how-it-works"
              className="text-slate-600 hover:text-violet-700"
            >
              How it works
            </a>
            <a href="#history" className="text-slate-600 hover:text-violet-700">
              My Projects
            </a>
          </nav>

          <button
            className="rounded-lg border p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          <div className="hidden rounded-full bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700 md:block">
            AI Ad Studio
          </div>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-3 border-t px-5 py-4 md:hidden">
            <a href="#create">Create Ad</a>
            <a href="#how-it-works">How it works</a>
            <a href="#history">My Projects</a>
          </nav>
        )}
      </header>

      <main className="mx-auto max-w-7xl px-5 py-10">
        <section className="mb-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            <Sparkles size={16} />
            AI-powered advertisement creator
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
            Turn your product image into an
            <span className="text-violet-600"> amazing video ad.</span>
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600">
            Upload your product image, describe your idea, and create
            professional advertisements using AI.
          </p>
        </section>

        <section
          id="create"
          className="grid items-start gap-7 lg:grid-cols-[1.5fr_1fr]"
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-bold">Create your advertisement</h2>
              <p className="mt-1 text-sm text-slate-500">
                Follow these simple steps to prepare your ad.
              </p>
            </div>

            <div className="mb-7">
              <h3 className="mb-3 font-semibold">
                1. Select advertisement category
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {categories.map((item) => {
                  const Icon = item.icon;
                  const selected = category === item.name;

                  return (
                    <button
                      key={item.name}
                      onClick={() => setCategory(item.name)}
                      className={`rounded-xl border p-4 text-left transition ${
                        selected
                          ? "border-violet-600 bg-violet-50 ring-2 ring-violet-100"
                          : "border-slate-200 hover:border-violet-300"
                      }`}
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <Icon
                          className={
                            selected ? "text-violet-600" : "text-slate-500"
                          }
                        />
                        {selected && (
                          <CheckCircle size={18} className="text-violet-600" />
                        )}
                      </div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="mt-1 text-xs text-slate-500">
                        {item.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mb-7">
              <h3 className="mb-3 font-semibold">
                2. Upload your product image
              </h3>

              <label className="flex min-h-52 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-5 text-center hover:border-violet-500">
                {preview ? (
                  <img
                    src={preview}
                    alt="Product preview"
                    className="max-h-64 rounded-lg object-contain"
                  />
                ) : (
                  <>
                    <div className="mb-3 rounded-full bg-violet-100 p-4 text-violet-600">
                      <Upload size={28} />
                    </div>
                    <p className="font-semibold">
                      Click to upload product image
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      PNG, JPG or WEBP
                    </p>
                  </>
                )}
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  className="hidden"
                  onChange={handleImage}
                />
              </label>

              {imageFile && (
                <p className="mt-2 text-sm text-green-700">
                  Selected: {imageFile.name}
                </p>
              )}
            </div>

            <div className="mb-7">
              <h3 className="mb-3 font-semibold">
                3. Describe your advertisement
              </h3>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Example: Create a stylish advertisement showing these shoes in a modern sports environment. Highlight their design and comfort."
                rows={5}
                className="w-full resize-y rounded-xl border border-slate-300 p-4 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
              />
              <p className="mt-2 text-xs text-slate-500">
                Describe the product, style, background or message you want.
              </p>
            </div>

            <div className="mb-7">
              <h3 className="mb-3 font-semibold">4. Select video duration</h3>
              <div className="flex flex-wrap gap-3">
                {["8 seconds", "10 seconds"].map((time) => (
                  <button
                    key={time}
                    onClick={() => setDuration(time)}
                    className={`rounded-lg border px-5 py-3 text-sm font-semibold ${
                      duration === time
                        ? "border-violet-600 bg-violet-50 text-violet-700"
                        : "border-slate-300 text-slate-600"
                    }`}
                  >
                    <Clock className="mr-2 inline" size={16} />
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleGenerate}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-violet-600 px-6 py-4 font-bold text-white transition hover:bg-violet-700"
            >
              <Sparkles size={20} />
              Generate Advertisement
            </button>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-slate-900 p-6 text-white">
              <div className="mb-5 flex items-center gap-2 text-violet-300">
                <Sparkles size={20} />
                <span className="font-semibold">Your AI Ad Preview</span>
              </div>

              <div className="flex aspect-video flex-col items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-center">
                <div className="mb-3 rounded-full bg-slate-700 p-4">
                  <Video size={32} className="text-violet-300" />
                </div>
                <p className="font-semibold">Your video will appear here</p>
                <p className="mt-2 text-xs text-slate-400">
                  Upload an image and prepare your advertisement
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-slate-800 p-3">
                  <p className="text-xs text-slate-400">Category</p>
                  <p className="mt-1 text-sm font-semibold">{category}</p>
                </div>
                <div className="rounded-lg bg-slate-800 p-3">
                  <p className="text-xs text-slate-400">Duration</p>
                  <p className="mt-1 text-sm font-semibold">{duration}</p>
                </div>
              </div>
            </div>

            <div
              id="how-it-works"
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="mb-5 font-bold">How AdGen AI works</h3>
              {[
                ["Upload", "Upload your product image.", Image],
                [
                  "Understand",
                  "AI understands your image and prompt.",
                  Sparkles,
                ],
                ["Generate", "AI creates advertisement scenes.", WandSparkles],
                [
                  "Download",
                  "Preview and download your final video.",
                  Download,
                ],
              ].map(([title, description, Icon], index) => (
                <div key={title} className="mb-5 flex gap-3 last:mb-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                    <Icon size={19} />
                  </div>
                  <div>
                    <p className="font-semibold">
                      {index + 1}. {title}
                    </p>
                    <p className="text-sm text-slate-500">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              id="history"
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="font-bold">My Projects</h3>
              <p className="mt-2 text-sm text-slate-500">
                Your completed advertisements will appear here once we connect
                the backend.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
                <Play size={16} />
                No generated videos yet
              </div>
            </div>
          </aside>
        </section>

        <footer className="py-10 text-center text-sm text-slate-500">
          AdGen AI — AI-powered advertisement creation platform
        </footer>
      </main>
    </div>
  );
}

export default App;
