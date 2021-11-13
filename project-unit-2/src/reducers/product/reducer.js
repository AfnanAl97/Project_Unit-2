const initialState = {
  products: [
    {
      id: 1,
      name: "Apple MacBook Pro 14",
      price: 9499,
      description:
        "processor type M1 Pro 8-core CPU 16-core Neural Engine graphics card 14-core GPU display type Liquid Retina XDR Display display size 14.2 operating system MacOS Monterey product type Laptop model series (Apple) MacBook Pro generation/release 2021 color Space Grey capacity 512 GB SSD RAM 16 GB RAM ",
      category: "Laptops",
      image: "https://www.jarir.com/media//catalog/product/5/7/571625.jpg?1",
    },
    {
      id: 2,
      name: " LG 55NANO75VPA 55 4K Ultra",
      price: 3100,
      description:
        "display type 4K Ultra HD Nano Celldisplay size 55 display backlight LEDoperating system WebOS 5.0HDR (high dynamic range imaging) HDR10 Proproduct type Smart TVdisplay resolution 3840 X 2160prefresh rate 50 Hzprocessor cores Quad Coreconnectivity technology Bluetooth/WiFi/WirelessHDMI port 3 Port HDMIconnectivity port HDMI/USB/Optical Audio Out/RJ-45speakers Ultra Surround (2 X 10W)special features ThinQ AI, Ultra Surround, Magic Remotepre-installed apps Apple TV App, Netflix ",
      category: "TV",
      image: "https://www.jarir.com/media//catalog/product/5/6/564635.jpg",
    },
    {
      id: 3,
      name: "HP All-in-One 24-df1003nx",
      description:
        "processor type Intel Core i3-1125G4 (11th Gen) graphics card Intel GMA HD display type FHD-LED Multi-touch Display display size 23.8 operating system Windows 10 product type PC Desktop Computer model series (HP) All-in-One generation/release 2021 color Jet Black operating system architecture 64-bit processor speed 2 GHz RAM 4 GB RAM capacity 1 TB HDD ",
      price: 2899,
      category: "PC",
      image: "https://www.jarir.com/media//catalog/product/5/6/561961.jpg",
    },
    {
      id: 4,
      name: "Samsung Galaxy Z Fold3 ",
      price: 6799,
      description:
        "SKU: 567509 Manufacturer No :SMF926BZSDMEA capacity: 256 GB display size :7.6 (Secondary Display) cam resolution Rear: 12 MP + 12 MP + 12 MP/Front: 10 MP + 4 MP (UDC)",
      category: "Mobiles",
      image: "https://www.jarir.com/media//catalog/product/5/6/567509.jpg",
    },
    {
      id: 5,
      name: "Lenovo IdeaCentre AIO 3",
      description:
        "processor type Intel Core i7-10700T (10th Gen) graphics card AMD Radeon 625 (2 GB) display type FHD-LED IPS Multi-Touch Display display size 23.8 operating system Windows 10 product type PC Desktop Computer model series (Lenovo) Ideacentre generation/release 2020 color Business Black operating system architecture 64-bit processor speed 2 GHz RAM 8 GB RAM capacity 512 GB PCIe NVMe M.2 SSD ",
      price: 4899,
      category: "PC",
      image: "https://www.jarir.com/media//catalog/product/5/5/557264.jpg",
    },
    {
      id: 6,
      name: "Apple iMac All-in-One",
      description:
        "processor type Intel Core i7 (10th Gen) graphics card AMD Radeon Pro 5500 XT VRAM (8 GB) display type 5K Retina IPS Display display size 27 operating system macOS Catalina product type PC Desktop Computer model series (Apple) iMac generation/release 2020 color Silver processor speed 3.8 GHz RAM 8 GB RAM capacity 512 GB SSD ",
      price: 10500,
      category: "PC",
      image: "https://www.jarir.com/media//catalog/product/5/5/553060.jpg",
    },
    {
      id: 7,
      name: "Honor 20 Pro ",
      description:
        "capacity 256 GB display size 6.26 cam resolution Rear: 48 MP + 16 MP + 8 MP + 2 MP/Front: 32 MP camera special features 3X Optical/5X Hybrid/up to 30X Digital Zoom, SuperWide Angle/Telephoto/Macro processor cores Octa Core battery capacity 4000 mAh product type Smartphone operating system Android v9.0 (Pie) supported network 4G LTE ",
      price: 2189,
      category: "Mobiles",
      image: "https://www.jarir.com/media//catalog/product/5/3/531912.jpg",
    },
    {
      id: 8,
      name: "Lenovo IdeaCentre AIO 3",
      description:
        "processor type Intel Core i5-10400T (10th Gen) graphics card AMD Radeon 625 (2 GB) display type FHD-LED Multi-touch Display display size 23.8 operating system Windows 10 product type PC Desktop Computer model series (Lenovo) Ideacentre generation/release 2020 color White operating system architecture 64-bit processor speed 2 GHz RAM 8 GB RAM capacity 1 TB HDD ",
      price: 3599,
      category: "PC",
      image: "https://www.jarir.com/media//catalog/product/5/5/551981.jpg",
    },
    {
      id: 9,
      name: " Apple iPhone 13 ",
      price: 3799,
      category: "Mobiles",
      description:
        "capacity 128 GB display size 6.1 cam resolution Rear: 12 MP + 12 MP/Front: 12 MP camera special features 2X Optical Zoom, Night Mode, Optical Image Stabilization, Digital Zoom up to 5X",
      image: "https://www.jarir.com/media//catalog/product/5/6/569276.jpg",
    },
    {
      id: 10,
      name: "Apple iPad Pro 12.9 ",
      price: 6599,
      category: "Tablets",
      description:
        "operating system iPadOS display type Liquid Retina Display display size 12.9processor cores Octa Coreproduct type Tablet PC - 4G Support ",
      image: "https://www.jarir.com/media//catalog/product/5/4/547330.jpg",
    },
    {
      id: 11,
      name: "Huawei MatePad 10.4",
      price: 1149,
      category: "Tablets",
      description:
        "operating system Android v10 + EMUI 10.1 display type IPS-LCD Touchscreen display size 10.4 processor cores Octa Coreprocessor speed 	2X 2.27 (Cortex A76) + 6X 1.88 (Cortex A55) GHz ",
      image: "https://www.jarir.com/media//catalog/product/5/6/561021.jpg",
    },
    {
      id: 12,
      name: "Apple iPad mini 5 ",
      price: 2949,
      category: "Tablets",
      description:
        "operating system iOS 12 display type Retina Displaydisplay size 	7.9 product type Tablet PC - 4G Supportmodel series 	(Apple) iPad Minigeneration/release (iPad Mini) 2019 operating system architecture 	64 bit supported network 4G ",
      image: "https://www.jarir.com/media//catalog/product/5/2/526037.jpg",
    },
    {
      id: 13,
      name: "TCL 10 TabMax Tablet",
      price: 1432,
      category: "Tablets",
      description:
        "operating system Android v10.0 display type 	IPS FHD-LCD Touchscreen display size 	10.3 processor cores 	Octa Core processor speed 	2 GHz product type 	Tablet PC - 4G Support ",
      image: "https://www.jarir.com/media//catalog/product/5/6/565737.jpg",
    },
    {
      id: 14,
      name: "MSI GE76 Raider 11UH",
      price: 16999,
      category: "Laptops",
      description:
        "processor type 	Intel Core i9-11980HK (11th Gen) graphics card NVIDIA GeForce RTX 3080 (16 GB) display type FHD-LED 300 Hz display size 17.3 operating system Windows 10 product type Gaming Laptop model series (MSI) GE generation/release 2021 color Metal Grey operating system architecture 64 bit processor speed 2.6 GHz VR (virtual reality) enabled VR Enabled capacity 1 TB SSD RAM 32 GB RAM ",
      image: "https://www.jarir.com/media//catalog/product/5/6/563872.jpg",
    },
    {
      id: 15,
      name: "MSI GF66 Katana 11UD",
      price: 6000,
      category: "Laptops",
      description:
        "processor type 	Intel Core i7-11800H graphics card NVIDIA GeForce RTX 3050 Ti (4 GB) display type FHD IPS 144 Hz Display display size 15.6 operating system Windows 10 product type Gaming Laptop model series (MSI) GF generation/release 2021 color Black operating system architecture 64 bit processor speed 2.3 GHz VR (virtual reality) enabled VR Enabled capacity 1 TB SSD RAM 16 GB RAM ",
      image: "https://www.jarir.com/media//catalog/product/5/6/563911.jpg",
    },
    {
      id: 16,
      name: "MSI GP76 Leopard 11UG ",
      price: 10000,
      category: "Laptops",
      description:
        "processor type 	Intel Core i7-11800H graphics card NVIDIA GeForce RTX 3070 (8 GB) display type FHD-LED 144 Hz display size 17.3 operating system Windows 10 product type Gaming Laptop model series (MSI) GP generation/release 2021 color Black operating system architecture 64 bit processor speed 2.3 GHz VR (virtual reality) enabled VR Enabled capacity 1 TB SSD RAM 16 GB RAM ",
      image: "https://www.jarir.com/media//catalog/product/5/6/563884.jpg",
    },
    {
      id: 17,
      name: "OPPO",
      price: 999,
      category: "Mobiles",
      description: "128 GB, Navy Black, 5G",
      image: "https://www.jarir.com/media/catalog/product/5/5/559620.jpg",
    },
    {
      id: 18,
      name: "Sony KD65X80JS 65 4K",
      price: 4000,
      category: "TV",
      description:
        "display type 4K Ultra HD display size 65 display backlight DLED operating system Android 9.0 HDR (high dynamic range imaging) HDR10 product type Smart TV display resolution 3840 X 2160p aspect ratio 16:9 refresh rate 50 Hz connectivity technology Bluetooth/WiFi/Wireless HDMI port 4 Port HDMI connectivity port HDMI/HDMI (ARC)/USB/Optical Audio Out/Composite In/RS-232C In/RF In/RJ-45 speakers Dolby Digital Audio (2 X 10W) special features Google Assistant, Voice Search Remote ",
      image: "https://www.jarir.com/media//catalog/product/5/6/569642.jpg",
    },
    {
      id: 19,
      name: "Samsung AU7000 70 4K",
      price: 4299,
      category: "TV",
      description:
        "display type 4K Ultra HD display size 70 display backlight LED operating system Tizen 2.0 HDR (high dynamic range imaging) HDR10+ product type Smart TV model series (Samsung) Series 7 display resolution 3840 X 2160p connectivity technology Bluetooth/WiFi/Wireless HDMI port 2 Port HDMI connectivity port HDMI/HDMI (eARC)/USB/Optical Audio Out/RF In/RJ-45 speakers Dolby Digital Plus (20 W RMS) special features Mirroring, Web Browser, WiFi Direct pre-installed apps Netflix, T-Cast, YouTube, Dailymotion ",
      image: "https://www.jarir.com/media//catalog/product/5/6/565558.jpg?1",
    },
    {
      id: 20,
      name: "iPhone 13",
      description: "Apple iPhone 13 Pro 256 GB, Pacific Blue, 5G",
      price: 7199,
      category: "Mobiles",
      image: "https://www.jarir.com/media/catalog/product/5/6/569369.jpg",
    },
    {
      id: 21,
      name: "haier",
      price: 4499,
      category: "TV",
      description: "Haier H75S5UG 75, 4K Ultra HD DLED Android TV",
      image: "https://www.jarir.com/media//catalog/product/5/5/551984.jpg",
    },
    {
      id: 22,
      name: "Acer Aspire C22-963",
      description:
        "processor type Intel Core i3-1005G1 (10th Gen) graphics card Intel UHD Graphics G1 display type FHD-LED IPS Display display size 21.5 operating system Windows 10 product type PC Desktop Computer model series (Acer) Aspire generation/release 2020 color Silver operating system architecture 64-bit processor speed 1.2 GHz RAM 4 GB RAM capacity 1 TB HDD ",
      price: 2199,
      category: "PC",
      image: "https://www.jarir.com/media//catalog/product/5/5/551844.jpg",
    },
    {
      id: 23,
      name: "Apple iMac M1 PC ",
      description:
        "processor type M1 8-core CPU 16-core Neural Engine graphics card 8-core GPU display type 4.5K Retina IPS Display display size 24 operating system macOS Big Sur product type PC Desktop Computer model series (Apple) iMac generation/release 2021 color Blue processor speed 1 GHz RAM 8 GB RAM capacity 512 GB SSD",
      price: 8000,
      category: "PC",
      image: "https://www.jarir.com/media//catalog/product/5/6/564078.jpg",
    },
    {
      id: 24,
      name: "SamsungTV",
      price: 5399,
      category: "TV",
      description: "Samsung Q60A Ultra HD QLED (Quantum-dot) Smart TV ",
      image: "https://www.jarir.com/media//catalog/product/5/6/568988.jpg",
    },
    {
      id: 25,
      name: "iPad",
      price: 3499,
      category: "Tablets",
      description:
        "Apple iPad mini 6 Tablet PC - 5G Support 8.3', 64 GB, Purple",
      image: "https://www.jarir.com/media//catalog/product/5/6/569476.jpg",
    },
    {
      id: 26,
      name: "Huawei",
      price: 3999,
      category: "Laptops",
      description:
        "Intel Core i5-1135G7 (11th Gen), Intel Iris Xe Graphics, 512 GB SSD",
      image: "https://www.jarir.com/media/catalog/product/5/6/569044.jpg",
    },
    {
      id: 27,
      name: "asus",
      price: 4683,
      category: "Laptops",
      description:
        "'15.6', AMD Ryzen 7-4800H, NVIDIA GeForce GTX 1650 (4 GB), 512 GB PCIe NVMe M.2 SSD",
      image: "https://www.jarir.com/media//catalog/product/5/6/567275.jpg",
    },
  ],
  searchresult: [],
  filteredProducts: [],
};

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_PRODUCTS":
      return {
        products: payload,
      };
    // the payload is an array
    case "SET_PRODUCTS":
      console.log(payload);
      return {
        products: [...state.products, payload],
        searchresult: state.searchresult,
      };
    case "DELETE_PRODUCT":
      return {
        products: state.products.filter((element) => {
          return element.id !== payload.itemId;
        }),
      };
    case "UPDATE_PRODUCTS":
      const newProducts = state.products.map(
        (oldPro) => payload.find((newPro) => newPro.id === oldPro.id) || oldPro
      );
      return {
        products: newProducts,
      };
    // the payload is an array
    case "SEARCH_PRODUCTS":
      return {
        products: state.products,
        searchresult: payload,
      };
    case "FILTERING_PRODUCTS":
      return {
        products: state.products,
        filteredProducts: payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
