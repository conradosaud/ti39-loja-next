import supabase from './supabase.js'

export async function buscaTodos(){
    const resposta = await supabase.from("produtos").select();
    return resposta;
}

export async function busca( id ){
    return await supabase.from("produtos").select().eq("id", id);
}
