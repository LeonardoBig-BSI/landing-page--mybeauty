import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

type NavBarProps = {
  isMobile?: boolean;
};

export default function NavBar({ isMobile = false }: NavBarProps) {
  return (
    <Menubar className={`${isMobile ? "block" : "hidden md:flex"} 
                      bg-zinc-950  border border-zinc-950 text-white rounded-none`}>      
      <MenubarMenu>
        <MenubarTrigger>Perfumes</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Perfumes Femininos</MenubarCheckboxItem>
          <MenubarCheckboxItem>Perfumes Masculinos</MenubarCheckboxItem>
          <MenubarCheckboxItem>Perfumes Unissex</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            Kits Presenteáveis
          </MenubarItem>
          <MenubarItem inset>
            Velas e Fragâncias de ambiente
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Cabelos</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Condicionador</MenubarCheckboxItem>
          <MenubarCheckboxItem>Kits para cabelos</MenubarCheckboxItem>
          <MenubarCheckboxItem>Shampoo</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            Máscara
          </MenubarItem>
          <MenubarItem inset>
            Modelador
          </MenubarItem>
          <MenubarItem inset>
            Finalizador
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Maquiagem</MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Face</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Base</MenubarItem>
              <MenubarItem>Blush</MenubarItem>
              <MenubarItem>Bronzer</MenubarItem>
              <MenubarItem>Corretivo</MenubarItem>
              <MenubarItem>Pó</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Lábios</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Batons</MenubarItem>
              <MenubarItem>Gloss</MenubarItem>
              <MenubarItem>Lápis de boca</MenubarItem>
              <MenubarItem>Primer labial</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Olhos</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Cílios postiços</MenubarItem>
              <MenubarItem>Delineadores</MenubarItem>
              <MenubarItem>Lápis</MenubarItem>
              <MenubarItem>Sombras</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Sobrancelhas</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Delienadores</MenubarItem>
              <MenubarItem>Kit sobrancelha</MenubarItem>
              <MenubarItem>Lápis</MenubarItem>
              <MenubarItem>Máscaras</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Unhas</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Base</MenubarItem>
              <MenubarItem>Esmaltes</MenubarItem>
              <MenubarItem>Fixador</MenubarItem>
              <MenubarItem>Removedor de esmaltes</MenubarItem>
              <MenubarItem>Top Coat</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Paletas</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Paletas de contorno</MenubarItem>
              <MenubarItem>Paletas de corretivo</MenubarItem>
              <MenubarItem>Paletas de iluminador</MenubarItem>
              <MenubarItem>Paletas de sombra</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Acessórios</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Apontadores</MenubarItem>
              <MenubarItem>Cases</MenubarItem>
              <MenubarItem>Curvadores de cílios</MenubarItem>
              <MenubarItem>Esponjas</MenubarItem>
              <MenubarItem>Kits de pincéis</MenubarItem>
              <MenubarItem>Pincéis</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Skincare</MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Tipos de Pele</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Pele Normal</MenubarItem>
              <MenubarItem>Pele Madura</MenubarItem>
              <MenubarItem>Pele Mista</MenubarItem>
              <MenubarItem>Pele Oleosa</MenubarItem>
              <MenubarItem>Pele Seca</MenubarItem>
              <MenubarItem>Pele Sensível</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Olhos & Lábios</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Cílios</MenubarItem>
              <MenubarItem>Esfoliantes</MenubarItem>
              <MenubarItem>Hidratantes</MenubarItem>
              <MenubarItem>Sobrancelhas</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Acessórios</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Aparelhos de limpeza</MenubarItem>
              <MenubarItem>Aplicadores</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Marcas</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Anastasia Beverly Hills</MenubarCheckboxItem>
          <MenubarCheckboxItem>Biossance</MenubarCheckboxItem>
          <MenubarCheckboxItem>Boticario</MenubarCheckboxItem>
          <MenubarCheckboxItem>Carolina Herrera</MenubarCheckboxItem>
          <MenubarCheckboxItem>Esthederm</MenubarCheckboxItem>
          <MenubarCheckboxItem>Eudora</MenubarCheckboxItem>
          <MenubarCheckboxItem>Fenty Beauty</MenubarCheckboxItem>
          <MenubarCheckboxItem>Fenty Skin</MenubarCheckboxItem>
          <MenubarCheckboxItem>Glow Recipe</MenubarCheckboxItem>
          <MenubarCheckboxItem>Juliette has a Gun</MenubarCheckboxItem>
          <MenubarCheckboxItem>Penhaligon's</MenubarCheckboxItem>
          <MenubarCheckboxItem>Sephora</MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="bg-white text-zinc-950">Login</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  )
}
