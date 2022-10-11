import { Component, OnInit } from '@angular/core';
import { Entree } from 'src/app/shared/interfaces/entree';
import { EntreeService } from 'src/app/shared/services/entree.service';
import { LoadScriptsService } from 'src/app/shared/services/load-scripts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public entryList: Entree[];
  public search: string = '';
  public miToken: number;

  constructor(private entreeService: EntreeService, private name: LoadScriptsService) {
    this.entryList = [
      {
        name: 'Corsair Vengeance',
        description: 'RAM RGB Pro Optimizado AMD DDR4 3200 16GB 2x8GB CL16',
        price: "81,99€",
        image: 'https://thumb.pccomponentes.com/w-530-530/articles/27/279642/corsair-vengeance-rgb-pro-optimizado-amd-ddr4-3200-16gb-2x8gb-cl16-opiniones.jpg'
      },
      {
        name: 'Logitech G502 Hero',
        description: 'Ratón Gaming 25600DPI',
        price: "39,99€",
        image: 'https://thumb.pccomponentes.com/w-530-530/articles/17/179806/244-logitech-g502-hero-raton-gaming-16000dpi-caracteristicas.jpg'
      },
      {
        name: 'Portátil MSI Katana GF66 12UC-082XES',
        description: 'Intel Core i7-12700H/16GB/1TB SSD/RTX3050/15.6"',
        price: "1099,99€",
        image: 'https://thumb.pccomponentes.com/w-530-530/articles/1001/10011004/1466-msi-katana-gf66-12ud-082xes-intel-core-i7-12700h-16gb-1tb-ssd-rtx3050-156-3b7c3f62-ac49-4155-bcd2-35f217618c49.jpg'
      },
      {
        name: 'Logitech K120',
        description: 'Teclado con Cable USB Negro',
        price: "8,29€",
        image: 'https://thumb.pccomponentes.com/w-530-530/articles/4/43015/130-logitech-keyboard-k120-teclado-usb-comprar.jpg'
      },
      {
        name: 'MSI Vigor GK30',
        description: 'Teclado Gaming RGB',
        price: "34,99€",
        image: 'https://thumb.pccomponentes.com/w-530-530/articles/28/281737/msi-vigor-gk30-teclado-gaming-rgb.jpg'
      },
      {
        name: 'HP OMEN 30L GT13-1049ns',
        description: 'Intel Core i9-11900K/32GB/2TB SSD/RTX 3080 Ti',
        price: "2699,99€",
        image: 'https://thumb.pccomponentes.com/w-530-530/articles/1001/10011459/1989-hp-omen-30l-gt13-1049ns-intel-core-i9-11900k-32gb-2tb-ssd-rtx-3080-ti.jpg'
      },
      {
        name: 'PcCom Gold Pro',
        description: 'AMD Ryzen 5 5600X/16GB/1TB SSD/RTX 3060',
        price: "1584,88€",
        image: 'https://thumb.pccomponentes.com/w-530-530/articles/1005/10057589/1478-pccom-gold-pro-amd-ryzen-5-5600x-16gb-1tb-ssd-rtx-3060-comprar.jpg'
      },
      {
        name: 'Forgeon Sergeant',
        description: 'Auriculares Gaming 7.1 PC/PS4/PS5/Xbox/Xbox X/Switch Negros',
        price: "64,99€",
        image: 'https://thumb.pccomponentes.com/w-530-530/articles/43/433875/119-forgeon-sergeant-auriculares-gaming-wireless-pc-ps4-ps5-xbox-xbox-x-switch-negros-comprar.jpg'
      },
      {
        name: 'Forgeon Acrux',
        description: 'Leather Silla Gaming Negra',
        price: "249,01€",
        image: 'https://thumb.pccomponentes.com/w-530-530/articles/43/433694/1668-forgeon-acrux-leather-silla-gaming-negra-comprar.jpg'
      },
      {
        name: 'Forgeon Bolt PSU',
        description: '850W 80+ Gold Full Modular Fuente de Alimentación',
        price: "137,99€",
        image: 'https://thumb.pccomponentes.com/w-530-530/articles/43/433844/1904-forgeon-bolt-psu-850w-80-plus-gold-full-modular-comprar.jpg'
      },
    ];
    this.miToken = 0;
    name.Load(["slider"]);
  }

  ngOnInit(): void {
    if (localStorage.getItem('personalToken')) {
      this.miToken = +localStorage.getItem('personalToken')!;
    }
  }

  public showTitle(name: string, content: string, price: string): void {
    alert(`Nombre: ${name}. Descripción: ${content}.\n\nPrecio: ${price}`);
  }
}
