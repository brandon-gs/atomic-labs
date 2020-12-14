// Hooks
import { useRouter } from "next/router";

export default function useStep() {
  const router = useRouter();
  const step = parseInt(router.query.step);

  return { step };
}
