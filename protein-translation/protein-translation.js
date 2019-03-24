const condonAminoAcidMap = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
};

const stopCodon = ['UAA', 'UAG', 'UGA'];

function applyStops(rna) {
  const condons = [];
  rna.match(/.{1,3}/g).every((condon) => {
    if (stopCodon.includes(condon)) {
      return false;
    }
    condons.push(condon);
    return true;
  });
  return condons;
}

export function translate(rna) {
  if (!rna) return [];
  return applyStops(rna).reduce((acc, curr) => {
    if (!condonAminoAcidMap[curr]) {
      throw new Error('Invalid codon');
    }
    acc.push(condonAminoAcidMap[curr]);
    return acc;
  }, []);
}
