import { Ratelimit } from "@upstash/ratelimit"; // for deno: see above
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(8, "100 s"),
    analytics: true,
    prefix: "@upstash/ratelimit",
});

export { ratelimit };