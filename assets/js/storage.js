const STORAGE_KEYS = {
    TRANSACTIONS: 'si_keuangan_transactions_v1',
    LIMITS: 'si_keuangan_limits_v1'
};

// Batas maksimal default sesuai spreadsheet Anda
const DEFAULT_LIMITS = {
    'MAKAN': 1080000,
    'ROKOK': 0,
    'INTERNET': 150000,
    'JAJAN': 150000,
    'ALAT KEBERSIHAN': 70000,
    'KASI MAMA': 350000,
    'BPJS': 72000,
    'LAINNYA': 70000
};

// Data awal contoh dari gambar agar dashboard langsung terlihat hidup saat pertama dibuka
const INITIAL_TRANSACTIONS = [
    {
        id: 1730764800001,
        tanggal: '2026-11-05',
        tipe: 'PEMASUKAN',
        sumber: 'GAJI POKOK',
        nominalPemasukan: 3750000,
        langsungBayar: 0,
        hutangDulu: 0,
        keterangan: 'GAJI BULAN NOVEMBER',
        jenis: ''
    },
    {
        id: 1730764800002,
        tanggal: '2026-11-05',
        tipe: 'PENGELUARAN',
        sumber: '',
        nominalPemasukan: 0,
        langsungBayar: 150000,
        hutangDulu: 0,
        keterangan: 'INTERNET BULANAN',
        jenis: 'INTERNET'
    },
    {
        id: 1730764800003,
        tanggal: '2026-11-05',
        tipe: 'PENGELUARAN',
        sumber: '',
        nominalPemasukan: 0,
        langsungBayar: 55000,
        hutangDulu: 0,
        keterangan: 'MAKAN SIANG + ROKOK',
        jenis: 'MAKAN'
    },
    {
        id: 1731715200004,
        tanggal: '2026-11-16',
        tipe: 'PEMASUKAN',
        sumber: 'LAIN LAIN',
        nominalPemasukan: 20000,
        langsungBayar: 0,
        hutangDulu: 0,
        keterangan: 'PEMASUKAN TAMBAHAN',
        jenis: ''
    },
    {
        id: 1731715200005,
        tanggal: '2026-11-16',
        tipe: 'PENGELUARAN',
        sumber: '',
        nominalPemasukan: 0,
        langsungBayar: 350000,
        hutangDulu: 0,
        keterangan: 'KASI ORANG TUA',
        jenis: 'KASI MAMA'
    },
    {
        id: 1731715200006,
        tanggal: '2026-11-16',
        tipe: 'PENGELUARAN',
        sumber: '',
        nominalPemasukan: 0,
        langsungBayar: 234000,
        hutangDulu: 0,
        keterangan: 'BON MAKAN TEMPAT AMANG (PELUNASAN HUTANG OKTOBER)',
        jenis: 'PELUNASAN HUTANG'
    }
];

function getTransactions() {
    const raw = localStorage.getItem(STORAGE_KEYS.TRANSACTIONS);
    if (!raw) {
        localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(INITIAL_TRANSACTIONS));
        return INITIAL_TRANSACTIONS;
    }
    return JSON.parse(raw);
}

function saveTransactions(list) {
    localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(list));
}

function getLimits() {
    const raw = localStorage.getItem(STORAGE_KEYS.LIMITS);
    if (!raw) {
        localStorage.setItem(STORAGE_KEYS.LIMITS, JSON.stringify(DEFAULT_LIMITS));
        return { ...DEFAULT_LIMITS };
    }
    return JSON.parse(raw);
}

function saveLimits(limitsObj) {
    localStorage.setItem(STORAGE_KEYS.LIMITS, JSON.stringify(limitsObj));
}