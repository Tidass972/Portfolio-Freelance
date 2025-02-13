"use client"
import { Send } from "lucide-react"
import Button from "@/components/ui/button"
import { Input } from "@/components/ui/input" 
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export default function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        toast.success("Message envoyé avec succès!")
        e.currentTarget.reset()
      } else {
        throw new Error("Erreur lors de l'envoi du message")
      }
    } catch (error) {
      console.error(error.message)
      toast.error("Une erreur est survenue, veuillez réessayer")
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Contactez-moi
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                name="name"
                placeholder="Votre nom"
                required
              />
            </div>
            <div>
              <Input
                name="email"
                placeholder="Votre email"
                type="email"
                required
              />
            </div>
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Votre message"
              rows={5}
              required
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="gap-2 hover:scale-105 transition-transform duration-200">
              <Send className="w-4 h-4" />
              Envoyer
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
