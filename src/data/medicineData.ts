
import { Medicine } from '../types/medicine';

export const medicines: Medicine[] = [
  {
    id: '1',
    name: 'Aspirin',
    genericName: 'Acetylsalicylic Acid',
    description: 'A widely used pain reliever and anti-inflammatory medication that also helps prevent blood clots.',
    category: 'painkiller',
    dosage: '325-650mg every 4 hours',
    strength: '325mg',
    uses: [
      'Pain relief for headaches and muscle aches',
      'Reducing fever',
      'Anti-inflammatory effects',
      'Blood clot prevention in low doses'
    ],
    sideEffects: [
      'Stomach irritation or bleeding',
      'Nausea and vomiting',
      'Ringing in ears (tinnitus)',
      'Allergic reactions in sensitive individuals'
    ],
    warnings: [
      'Do not give to children under 16 due to Reye\'s syndrome risk',
      'Consult doctor if you have stomach ulcers',
      'May interact with blood thinners'
    ]
  },
  {
    id: '2',
    name: 'Amoxicillin',
    genericName: 'Amoxicillin Trihydrate',
    description: 'A penicillin-type antibiotic used to treat various bacterial infections.',
    category: 'antibiotic',
    dosage: '250-500mg every 8 hours',
    strength: '500mg',
    uses: [
      'Respiratory tract infections',
      'Ear infections',
      'Urinary tract infections',
      'Skin and soft tissue infections'
    ],
    sideEffects: [
      'Nausea and diarrhea',
      'Stomach upset',
      'Skin rash',
      'Yeast infections'
    ],
    warnings: [
      'Complete the full course even if feeling better',
      'Inform doctor of penicillin allergies',
      'May reduce effectiveness of birth control pills'
    ]
  },
  {
    id: '3',
    name: 'Vitamin D3',
    genericName: 'Cholecalciferol',
    description: 'Essential vitamin that helps the body absorb calcium and supports bone health.',
    category: 'vitamin',
    dosage: '1000-2000 IU daily',
    strength: '1000 IU',
    uses: [
      'Bone health and osteoporosis prevention',
      'Immune system support',
      'Muscle function',
      'Cardiovascular health'
    ],
    sideEffects: [
      'Rarely causes side effects at recommended doses',
      'High doses may cause nausea',
      'Excessive intake can lead to kidney problems'
    ],
    warnings: [
      'Do not exceed recommended dosage',
      'Consult doctor if taking calcium supplements'
    ]
  },
  {
    id: '4',
    name: 'Tums',
    genericName: 'Calcium Carbonate',
    description: 'Fast-acting antacid that neutralizes stomach acid and provides calcium supplementation.',
    category: 'antacid',
    dosage: '2-4 tablets as needed',
    strength: '750mg',
    uses: [
      'Heartburn relief',
      'Acid indigestion',
      'Sour stomach',
      'Calcium supplementation'
    ],
    sideEffects: [
      'Constipation',
      'Gas or bloating',
      'Mild stomach upset'
    ],
    warnings: [
      'Do not exceed 7 tablets in 24 hours',
      'Consult doctor if symptoms persist over 2 weeks'
    ]
  },
  {
    id: '5',
    name: 'Benadryl',
    genericName: 'Diphenhydramine HCl',
    description: 'Antihistamine that provides relief from allergic reactions and can cause drowsiness.',
    category: 'allergy',
    dosage: '25-50mg every 4-6 hours',
    strength: '25mg',
    uses: [
      'Allergic reactions and hives',
      'Hay fever symptoms',
      'Motion sickness',
      'Sleep aid (occasional use)'
    ],
    sideEffects: [
      'Drowsiness and dizziness',
      'Dry mouth and throat',
      'Blurred vision',
      'Constipation'
    ],
    warnings: [
      'Do not drive or operate machinery',
      'Avoid alcohol while taking',
      'Not recommended for children under 6'
    ]
  },
  {
    id: '6',
    name: 'Ibuprofen',
    genericName: 'Ibuprofen',
    description: 'Nonsteroidal anti-inflammatory drug (NSAID) that reduces pain, inflammation, and fever.',
    category: 'painkiller',
    dosage: '200-400mg every 4-6 hours',
    strength: '200mg',
    uses: [
      'Pain relief for headaches and muscle pain',
      'Reducing inflammation',
      'Fever reduction',
      'Menstrual cramp relief'
    ],
    sideEffects: [
      'Stomach upset or bleeding',
      'Nausea and heartburn',
      'Dizziness',
      'Fluid retention'
    ],
    warnings: [
      'Take with food to reduce stomach irritation',
      'Consult doctor if you have kidney problems',
      'May increase risk of heart attack or stroke with long-term use'
    ]
  }
];
