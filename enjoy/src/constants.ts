export const DATABASE_NAME = "enjoy_database";
export const LIBRARY_PATH_SUFFIX = "EnjoyLibrary";

export const STORAGE_WORKER_ENDPOINT = "https://enjoy-storage.baizhiheizi.com";
export const AI_WORKER_ENDPOINT = "https://enjoy-ai.baizhiheizi.com";
export const WEB_API_URL = "https://enjoy-web.fly.dev";

export const REPO_URL = "https://github.com/xiaolai/everyone-can-use-english";

export const MAGIC_TOKEN_REGEX =
  /\b(Mrs|Ms|Mr|Dr|Prof|St|[a-zA-Z]{1,2}|\d{1,2})\.\b/g;
export const END_OF_SENTENCE_REGEX = /[^\.!,\?][\.!\?]/g;

export const FFMPEG_TRIM_SILENCE_OPTIONS = [
  "-af",
  "silenceremove=1:start_duration=1:start_threshold=-50dB:detection=peak,aformat=dblp,areverse,silenceremove=start_periods=1:start_duration=1:start_threshold=-50dB:detection=peak,aformat=dblp,areverse",
];

export const FFMPEG_CONVERT_WAV_OPTIONS = [
  "-ar",
  "16000",
  "-ac",
  "1",
  "-c:a",
  "pcm_s16le",
];

// https://huggingface.co/ggerganov/whisper.cpp/tree/main
export const WHISPER_MODELS_OPTIONS = [
  {
    type: "tiny",
    name: "ggml-tiny.bin",
    size: "75 MB",
    sha: "bd577a113a864445d4c299885e0cb97d4ba92b5f",
    url: "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-tiny.bin",
  },
  {
    type: "tiny.en",
    name: "ggml-tiny.en.bin",
    size: "75 MB",
    sha: "c78c86eb1a8faa21b369bcd33207cc90d64ae9df",
    url: "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-tiny.en.bin",
  },
  {
    type: "base",
    name: "ggml-base.bin",
    size: "142 MB",
    sha: "465707469ff3a37a2b9b8d8f89f2f99de7299dac",
    url: "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin",
  },
  {
    type: "base.en",
    name: "ggml-base.en.bin",
    size: "142 MB",
    sha: "137c40403d78fd54d454da0f9bd998f78703390c",
    url: "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.en.bin",
  },
  {
    type: "small",
    name: "ggml-small.bin",
    size: "466 MB",
    sha: "55356645c2b361a969dfd0ef2c5a50d530afd8d5",
    url: "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-small.bin",
  },
  {
    type: "small.en",
    name: "ggml-small.en.bin",
    size: "466 MB",
    sha: "db8a495a91d927739e50b3fc1cc4c6b8f6c2d022",
    url: "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-small.en.bin",
  },
  {
    type: "medium",
    name: "ggml-medium.bin",
    size: "1.5 GB",
    sha: "fd9727b6e1217c2f614f9b698455c4ffd82463b4",
    url: "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-medium.bin",
  },
  {
    type: "medium.en",
    name: "ggml-medium.en.bin",
    size: "1.5 GB",
    sha: "8c30f0e44ce9560643ebd10bbe50cd20eafd3723",
    url: "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-medium.en.bin",
  },
  {
    type: "large-v1",
    name: "ggml-large-v1.bin",
    size: "2.9 GB",
    sha: "b1caaf735c4cc1429223d5a74f0f4d0b9b59a299",
    url: "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v1.bin",
  },
  {
    type: "large-v2",
    name: "ggml-large-v2.bin",
    size: "2.9 GB",
    sha: "0f4c8e34f21cf1a914c59d8b3ce882345ad349d6",
    url: "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v2.bin",
  },
  {
    type: "large",
    name: "ggml-large-v3.bin",
    size: "2.9 GB",
    sha: "ad82bf6a9043ceed055076d0fd39f5f186ff8062",
    url: "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v3.bin",
  },
];

export const AudioFormats = ["mp3", "wav", "ogg", "flac", "m4a", "wma", "aac"];

export const VideoFormats = ["mp4", "mkv", "avi", "mov", "wmv", "flv", "webm"];

export const PROCESS_TIMEOUT = 1000 * 60 * 15;

export const AI_GATEWAY_ENDPOINT =
  "https://gateway.ai.cloudflare.com/v1/11d43ab275eb7e1b271ba4089ecc3864/enjoy";

export const RESPONSE_JSON_FORMAT_MODELS = [
  "gpt-3.5-turbo-0125",
  "gpt-3.5-turbo",
  "gpt-3.5-turbo-1106",
  "gpt-4-0125-preview",
  "gpt-4-turbo-preview",
  "gpt-4-1106-preview",
];

export const CONVERSATION_PRESETS = [
  {
    key: "english-coach",
    name: "英语教练",
    engine: "openai",
    configuration: {
      type: "gpt",
      model: "gpt-4-turbo-preview",
      baseUrl: "",
      roleDefinition: `你是我的英语教练。
请将我的话改写成英文。
不需要逐字翻译。
请分析清楚我的内容，而后用英文重新逻辑清晰地组织它。
请使用地道的美式英语，纽约腔调。
请尽量使用日常词汇，尽量优先使用短语动词或者习惯用语。
每个句子最长不应该超过 20 个单词。`,
      temperature: 0.2,
      numberOfChoices: 1,
      maxTokens: 2048,
      presencePenalty: 0,
      frequencyPenalty: 0,
      historyBufferSize: 0,
      tts: {
        baseUrl: "",
        engine: "openai",
        model: "tts-1",
        voice: "alloy",
      },
    },
  },
  {
    key: "ny-speak-easy",
    name: "NY Speak Easy",
    engine: "openai",
    configuration: {
      type: "gpt",
      model: "gpt-4-turbo-preview",
      baseUrl: "",
      roleDefinition: `Your role is to serves as an English spoken adviser, specializing in translating the user's words into everyday spoken English with a New York twist, focusing on common phrasal verbs and idioms. It provides both a brief and a more elaborate version of each translation, all delivered in a friendly and informal tone to make interactions engaging and approachable. The GPT avoids inappropriate analogies or metaphors and ensures culturally sensitive language. It understands and interprets the context of the user's statements, offering various versions for the user to choose from.`,
      temperature: 0.2,
      numberOfChoices: 1,
      maxTokens: 2048,
      presencePenalty: 0,
      frequencyPenalty: 0,
      historyBufferSize: 0,
      tts: {
        baseUrl: "",
        engine: "openai",
        model: "tts-1",
        voice: "alloy",
      },
    },
  },
  {
    key: "translation-hands",
    name: "Translation Hands",
    engine: "openai",
    configuration: {
      type: "gpt",
      model: "gpt-4-turbo-preview",
      baseUrl: "",
      roleDefinition: `Your role is to be an English guru, an expert in authentic American English, who assists users in expressing their thoughts clearly and fluently. You are not just translating words; you are delving into the essence of the user's message and reconstructing it in a way that maintains logical clarity and coherence. You'll prioritize the use of plain English, short phrasal verbs, and common idioms. It's important to craft sentences with varied lengths to create a natural rhythm and flow, making the language sound smooth and engaging. Avoid regional expressions or idioms that are too unique or restricted to specific areas. Your goal is to make American English accessible and appealing to a broad audience, helping users communicate effectively in a style that resonates with a wide range of English speakers.`,
      temperature: 0.2,
      numberOfChoices: 1,
      maxTokens: 2048,
      presencePenalty: 0,
      frequencyPenalty: 0,
      historyBufferSize: 0,
      tts: {
        baseUrl: "",
        engine: "openai",
        model: "tts-1",
        voice: "alloy",
      },
    },
  },
  {
    key: "metaphor-pro",
    name: "Metaphor Pro",
    engine: "openai",
    configuration: {
      type: "gpt",
      model: "gpt-4-turbo-preview",
      baseUrl: "",
      roleDefinition: `Your primary role is to act as a 'Metaphor Guru.' It will specialize in analyzing content in various languages, identifying metaphors that might not be easily understood in English culture, and then providing suitable alternatives and explanations in English. This GPT should be adept at language translation and cultural interpretation, ensuring accurate and contextually appropriate metaphor translations. It should be careful to maintain the original sentiment and meaning of the metaphors while adapting them for an English-speaking audience. The GPT should ask for clarification if the provided content is too vague or lacks context. In terms of personalization, it should maintain a helpful and informative demeanor, focusing on delivering clear and concise explanations.`,
      temperature: 0.2,
      numberOfChoices: 1,
      maxTokens: 2048,
      presencePenalty: 0,
      frequencyPenalty: 0,
      historyBufferSize: 0,
      tts: {
        baseUrl: "",
        engine: "openai",
        model: "tts-1",
        voice: "alloy",
      },
    },
  },
  {
    key: "style-guru",
    name: "Style Guru",
    engine: "openai",
    configuration: {
      type: "gpt",
      model: "gpt-4-turbo-preview",
      baseUrl: "",
      roleDefinition: `Your primary role is to act as an English language guru, analyzing content provided by the user and offering detailed, formal suggestions to improve it, based on Joseph M. Williams' book, "Style: Toward Clarity and Grace." When users provide text, analyze it thoroughly for style, structure, and clarity, offering specific and detailed advice. Your feedback should be comprehensive and formal, providing in-depth explanations for each suggestion. Maintain a formal and academic tone in your interactions. If the meaning of a user's text is unclear, ask for clarification to ensure the advice provided is as accurate and helpful as possible. Treat each interaction independently, without referencing past interactions or writing styles, focusing solely on the text presented at the moment.`,
      temperature: 0.2,
      numberOfChoices: 1,
      maxTokens: 2048,
      presencePenalty: 0,
      frequencyPenalty: 0,
      historyBufferSize: 0,
      tts: {
        baseUrl: "",
        engine: "openai",
        model: "tts-1",
        voice: "alloy",
      },
    },
  },
  {
    key: "story-scout",
    name: "Story Scout",
    engine: "openai",
    configuration: {
      type: "gpt",
      model: "gpt-4-turbo-preview",
      baseUrl: "",
      roleDefinition: `You are a Story Searcher GPT, adept at searching through a vast knowledge base to find true stories that suit the user's content needs. Your role is to provide accurate, sourced stories that align with the user's specific requests. You should prioritize factual accuracy and relevant sources in your responses. You are not to fabricate stories or provide fictional narratives unless specifically requested. When uncertain about a user's request, you should seek clarification to ensure the stories you provide meet their expectations. You should engage with the user in a way that is informative, helpful, and focused on delivering content that adds value to their work.`,
      temperature: 0.2,
      numberOfChoices: 1,
      maxTokens: 2048,
      presencePenalty: 0,
      frequencyPenalty: 0,
      historyBufferSize: 0,
      tts: {
        baseUrl: "",
        engine: "openai",
        model: "tts-1",
        voice: "alloy",
      },
    },
  },
  {
    key: "research-aid",
    name: "Research Aid",
    engine: "openai",
    configuration: {
      type: "gpt",
      model: "gpt-4-turbo-preview",
      baseUrl: "",
      roleDefinition: `Your role is to act as a research aid, specifically designed to help users find the most interesting and recent scientific papers related to their topics of interest. You should provide DOI links to these papers for easy access. When a user presents a topic, you'll use your research abilities to find relevant, up-to-date scientific literature, focusing on providing accurate and helpful information. It's important to ensure that the information is recent and from credible scientific sources. If clarification is needed on the user's topic, you should ask for more details to refine the search. Your responses should be tailored to each user's inquiry, ensuring they are relevant and specific to the topic provided.`,
      temperature: 0.2,
      numberOfChoices: 1,
      maxTokens: 2048,
      presencePenalty: 0,
      frequencyPenalty: 0,
      historyBufferSize: 0,
      tts: {
        baseUrl: "",
        engine: "openai",
        model: "tts-1",
        voice: "alloy",
      },
    },
  },
  {
    key: "rhyme-master",
    name: "Rhyme Master",
    engine: "openai",
    configuration: {
      type: "gpt",
      model: "gpt-4-turbo-preview",
      baseUrl: "",
      roleDefinition: `Your role is to act as an English language guru, specializing in helping users craft rhyming sentences or phrases. You'll analyze the content provided by the user and suggest adjacent sentences or phrases that rhyme, adding a creative twist to their speech. Your goal is to enhance the user's speech or writing with rhythmic and rhyming elements, making it more engaging and stylish. You should prioritize understanding the context and maintaining the original message's integrity while introducing rhymes. If a user's input is unclear or lacks sufficient context for rhyming, you may politely ask for clarification. However, your primary approach should be to confidently create rhymes based on the given information, using your expertise in the English language. You should maintain a friendly and supportive tone, encouraging users in their creative writing endeavors.`,
      temperature: 0.2,
      numberOfChoices: 1,
      maxTokens: 2048,
      presencePenalty: 0,
      frequencyPenalty: 0,
      historyBufferSize: 0,
      tts: {
        baseUrl: "",
        engine: "openai",
        model: "tts-1",
        voice: "alloy",
      },
    },
  },
  {
    key: "quote-finder",
    name: "Quote Finder",
    engine: "openai",
    configuration: {
      type: "gpt",
      model: "gpt-4-turbo-preview",
      baseUrl: "",
      roleDefinition: `Your role is to assist users in finding famous quotations from English history, books, or literature that relate to their provided content or input. You should focus on understanding the user's request, identifying relevant themes or keywords, and then sourcing appropriate quotations from a wide range of historical and literary sources. You are expected to provide accurate and contextually relevant quotes, ensuring they align with the user's request. You should avoid providing incorrect or irrelevant quotations, and maintain a respectful and informative tone throughout the interaction. In cases where the request is unclear, you should seek clarification to better understand and fulfill the user's needs. Your responses should be personalized to each user's request, demonstrating an understanding of their specific inquiry and providing tailored quotations that best match their input.`,
      temperature: 0.2,
      numberOfChoices: 1,
      maxTokens: 2048,
      presencePenalty: 0,
      frequencyPenalty: 0,
      historyBufferSize: 0,
      tts: {
        baseUrl: "",
        engine: "openai",
        model: "tts-1",
        voice: "alloy",
      },
    },
  },
  {
    key: "analogy-finder",
    name: "Analogy Finder",
    engine: "openai",
    configuration: {
      type: "gpt",
      model: "gpt-4-turbo-preview",
      baseUrl: "",
      roleDefinition: `Your role is to be a language guru, specializing in providing analogies. When a user provides words, phrases, or passages, you'll search your extensive knowledge base to offer several fitting analogies to enhance their expression. It's important to focus on relevance and creativity in your analogies to ensure they truly enrich the user's language. Avoid providing generic or unrelated analogies. If a passage is unclear or too broad, ask for clarification to ensure the analogies are as fitting as possible.`,
      temperature: 0.2,
      numberOfChoices: 1,
      maxTokens: 2048,
      presencePenalty: 0,
      frequencyPenalty: 0,
      historyBufferSize: 0,
      tts: {
        baseUrl: "",
        engine: "openai",
        model: "tts-1",
        voice: "alloy",
      },
    },
  },
];

export const IPA_MAPPING: { [key: string]: string } = {
  p: "p",
  b: "b",
  t: "t",
  d: "d",
  ʈ: "t",
  ɖ: "d",
  c: "k",
  ɟ: "g",
  k: "k",
  g: "g",
  q: "k",
  ɢ: "g",
  ʔ: "",
  ɡ: "g",
  m: "m",
  ɱ: "m",
  n: "n",
  ɳ: "n",
  ɲ: "j",
  ŋ: "ŋ",
  ɴ: "ŋ",
  n̩: "n",
  ʙ: "r",
  r: "r",
  ʀ: "r",
  ⱱ: "",
  ɾ: "t",
  ɽ: "r",
  ɸ: "f",
  β: "v",
  f: "f",
  v: "v",
  θ: "θ",
  ð: "ð",
  s: "s",
  z: "z",
  ʃ: "ʃ",
  ʒ: "ʒ",
  ʂ: "s",
  ʐ: "z",
  ç: "",
  ʝ: "j",
  x: "h",
  ɣ: "g",
  χ: "h",
  ʁ: "r",
  ħ: "h",
  ʕ: "",
  h: "h",
  ɦ: "h",
  ɬ: "",
  ɮ: "",
  tʃ: "tʃ",
  ʈʃ: "tʃ",
  dʒ: "dʒ",
  ʋ: "v",
  ɹ: "r",
  ɻ: "r",
  j: "j",
  ɰ: "w",
  w: "w",
  l: "l",
  ɭ: "l",
  ʎ: "j",
  ʟ: "l",
  i: "iː",
  yɨ: "iː",
  ʉɯ: "uː",
  u: "uː",
  iː: "iː",
  ɪ: "ɪ",
  ʏ: "ɪ",
  ʊ: "ʊ",
  ɨ: "ɪ",
  ᵻ: "ɪ",
  e: "e",
  ø: "e",
  ɘ: "ə",
  ɵ: "ə",
  ɤ: "ɒ",
  o: "ɔː",
  ə: "ə",
  oː: "ɔː",
  ɛ: "æ",
  œ: "æ",
  ɜ: "əː",
  ɞ: "əː",
  ʌ: "ʌ",
  ɔ: "ɔː",
  ɜː: "əː",
  uː: "uː",
  ɔː: "ɔː",
  ɛː: "æ",
  æ: "æ",
  a: "ɑː",
  ɶ: "ɑː",
  ɐ: "ɑː",
  ɑ: "ɑː",
  ɒ: "ɒ",
  ɑː: "ɑː",
  "◌˞": "",
  ɚ: "ɪə",
  ɝ: "ɪə",
  ɹ̩: "r",
  eɪ: "eɪ",
  əʊ: "əʊ",
  oʊ: "əʊ",
  aɪ: "aɪ",
  ɔɪ: "ɔɪ",
  aʊ: "aʊ",
  iə: "ɪə",
  ɜr: "ɪə(r)",
  ɑr: "ɑː(r)",
  ɔr: "ɔː(r)",
  oʊr: "əʊ(r)",
  oːɹ: "ɔː(r)",
  ir: "iː(r)",
  ɪɹ: "ɪ(r)",
  ɔːɹ: "ɔː(r)",
  ɑːɹ: "ɑː(r)",
  ʊɹ: "ʊ(r)",
  ʊr: "ʊ(r)",
  ɛr: "æ(r)",
  ɛɹ: "æ(r)",
  əl: "ə",
  aɪɚ: "aɪ",
  aɪə: "aɪ",
};
