'use server';

import prisma from '@/lib/prisma';

export async function submitContact(formData: FormData) {
  try {
    const nome = formData.get('nome') as string;
    const email = formData.get('email') as string;
    const telefone = formData.get('telefone') as string;
    const servico = formData.get('servico') as string;
    const detalhes = formData.get('detalhes') as string | null;

    if (!nome || !email || !telefone || !servico) {
      return { success: false, error: 'Por favor, preencha todos os campos obrigatórios.' };
    }

    const lead = await prisma.contactLead.create({
      data: {
        nome,
        email,
        telefone,
        servico,
        detalhes: detalhes || undefined,
      },
    });

    return { success: true, data: lead };
  } catch (error) {
    console.error('Erro ao salvar contato:', error);
    return { success: false, error: 'Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.' };
  }
}
