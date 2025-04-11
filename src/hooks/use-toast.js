
import { useToast as useShadcnToast } from "@/components/ui/use-toast"

// Re-export the useToast hook
export { useToast as useToast } from "@/components/ui/use-toast"

// Also export the toast function directly
export const toast = (props) => {
  const { toast } = useShadcnToast()
  return toast(props)
}
