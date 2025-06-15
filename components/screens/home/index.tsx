import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";
import React from "react";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="flex justify-between">
          <div>
            <h1>Max McIsted</h1>
            <h2>Designer working on brand systems in deep tech</h2>
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <p>
          Currently finishing a BA in Graphic Design & Communication. Previous work at Arm (brand rollout) and Pragmatic (internal tooling, visual systems). I build the parts of brand that survive implementation.
        </p>
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="guides" />
      </FadeIn.Item>
      <FadeIn.Item>
        <div className="mt-6">
          <h2 className="py-2 text-muted capitalize">Contact</h2>
          <div className="border-border border-t" />
          <div className="flex justify-between py-2">
            <p>Reach out for work, questions, or just to share something interesting.</p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/maxmcisted" className="text-muted underline">
                LinkedIn
              </a>
              <a href="mailto:max.mcisted@arm.com" className="text-muted underline">
                Email
              </a>
            </div>
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
    </FadeIn.Container>
  );
}

