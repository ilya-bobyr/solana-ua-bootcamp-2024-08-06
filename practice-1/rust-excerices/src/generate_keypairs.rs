use solana_sdk::signer::keypair::Keypair;
use solana_sdk::signer::Signer;

pub fn generate_keypair(with_log: bool) -> Keypair {
    let keypair = Keypair::new();

    if with_log {
        println!("Public Key: {}", keypair.pubkey());
        println!("Public Key: {:x?}", keypair.secret().to_bytes());
    }

    keypair
}

pub fn generate_keypair_by_search(search_key: &str) {
    let mut keypair = generate_keypair(false);

    while !keypair
        .pubkey()
        .to_string()
        .to_lowercase()
        .starts_with(&search_key.to_lowercase())
    {
        keypair = generate_keypair(false);
    }

    println!("Public Key: {}", keypair.pubkey());
    println!("Public Key: {:x?}", keypair.secret().to_bytes());
}
