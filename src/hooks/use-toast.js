
import { useToast } from "@/components/ui/use-toast"

// Re-export the useToast hook
export { useToast }

// Also export the toast function directly
export const toast = (props) => {
  const { toast } = useToast()
  return toast(props)
}
