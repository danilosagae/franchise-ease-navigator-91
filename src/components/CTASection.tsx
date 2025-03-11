
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(8, { message: "Telefone inválido" }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const CTASection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    console.log("Form values:", values);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      
      form.reset();
    }, 1500);
  };

  return (
    <div className="py-16 hero-gradient" id="contato">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Dê o primeiro passo para abrir o seu negócio com segurança
          </h2>
          <p className="text-lg">
            Agende uma consulta gratuita e descubra como podemos ajudar você a iniciar sua jornada empreendedora.
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-xl p-8">
          <h3 className="text-xl font-semibold mb-6 text-gray-800 text-center">
            Agende uma Consulta Gratuita
          </h3>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome Completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="seu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefone</FormLabel>
                    <FormControl>
                      <Input placeholder="(00) 00000-0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem (opcional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Conte-nos um pouco sobre seu interesse em franquias..." 
                        className="resize-none" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-brand-blue hover:bg-brand-blue/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Agendar Consulta"}
                {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
