const CONFIG = {
  // profile setting (required)
  profile: {
    name: "visitor17564",
    image: "/avatar2.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "beginner developer",
    bio: "wanna be helpful.",
    email: "visitor17564@kakao.com",
    linkedin: "",
    github: "visitor17564",
    instagram: "",
  },
  projects: [
    {
      name: `visitor17564 blog`,
      href: "https://github.com/visitor17564/blog",
    },
  ],
  // blog setting (required)
  blog: {
    title: "visitor17564",
    description: "wanna be helpful",
  },

  // CONFIG configration (required)
  link: "https://visitor17564.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app/**Visitor%60s**%20Blog.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fmorethan-log.vercel.app%2Favatar.svg", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "visitor17564/blog",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
