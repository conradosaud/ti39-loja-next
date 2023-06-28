'use client'
import { redirect } from "next/navigation"
import { useEffect } from "react"

export default function Produto(){
    
    useEffect(()=>{
        alert("Página inválida")
        redirect("/")
    }, [])

}