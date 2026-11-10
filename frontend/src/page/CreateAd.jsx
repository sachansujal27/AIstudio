import { CategoryScale } from "chart.js";
import { Target } from "lucide-react";
import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const CreateAd = () => {
  const [params] = useSearchParams();
  const [image, SetImage] = useState();
  const [prompt, setPrompt] = useState();
  const [category, setCategory] = useState(params.get("category") || "food");
  const { error, ad, busy, geneartor } = useAdGeneartor();
  return (
    <>
      <div className="min-h-screen bg-[#050a1c] text-white p-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold"> Create Advertsitment</h1>
          <CategorySelector value={category} onchange={setCategory} />
          <ImageUploder file={image} onchange={SetImage} />
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.Target.value)}
            row={4}
            placeholder="Describe your ad: product, tone, offer, audience..."
            className="w-full rounded-xl bg-white/5 border border-white/10 p-3 outline-none focus:border-violet-400"
          />
          <Durationselector />
          <GeneartorButton loading={busy} disabled={!image && !prompt.trim()} />
        </div>
      </div>
    </>
  );
};

export default CreateAd;
