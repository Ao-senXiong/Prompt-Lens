import { Link, useNavigate } from "react-router-dom";
import { CredentialType, IDKitWidget, ISuccessResult } from "@worldcoin/idkit";
import React from 'react'
import {
  ChakraProvider,
  Stack,
  Avatar,
  AvatarBadge,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Switch,
  InputGroup,
  InputRightElement,
  Icon,
  Flex,
  Text,
  Badge,
  Button
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
// import { ThirdwebSDK } from "@thirdweb-dev/sdk";
// import { LocalWallet } from "@thirdweb-dev/wallets";




export const Login = () => {

    const nav = useNavigate();
    const handleProof = (result: ISuccessResult) => {
		return new Promise<void>((resolve) => {
			setTimeout(() => resolve(), 3000);
			// NOTE: Example of how to decline the verification request and show an error message to the user
		});
	};

	const onSuccess = async (result: ISuccessResult) => {
		console.log(result);
        // const walletWithOptions = new LocalWallet(
        //     {
        //         walletId: "wallet-id",
        //     },
        // );
        // // generate a random wallet
        // await walletWithOptions.generate();
        // // connect the wallet to the application
        // await walletWithOptions.connect();
        nav('/postConsole', {state: {id:result.nullifier_hash}} )
	};

    // const createWallet = async () => {
        
    //     // generate a random wallet
    //     // await wallet.generate();
    //     // // connect the wallet to the application
    //     // await wallet.connect();

    //     // console.log(wallet)
    //     // // at any point, you can save the wallet to persistent storage
    //     // await wallet.save(config);
    //     // // and load it back up
    //     // await wallet.load(config);

    //     // // you can also export the wallet out of the application
    //     // const exportedWallet = await wallet.export(config);
    //     // // and import it back in
    //     // await wallet.import(exportedWallet, config);

    //     // // You can then use this wallet to perform transactions via the SDK
    //     // const sdk = await ThirdwebSDK.fromWallet(wallet, "goerli");
    // };


	const urlParams = new URLSearchParams(window.location.search);
	const credential_types = (urlParams.get("credential_types")?.split(",") as CredentialType[]) ?? [
		CredentialType.Orb,
		CredentialType.Phone,
	];

	const action = urlParams.get("action") ?? "";
	const app_id = urlParams.get("app_id") ?? "wid_staging_1234";
    return (<ChakraProvider resetCSS>
                <Flex
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                mt={4}
                >
                <Flex
                    display="flex"
                    flexDirection="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    mb={10}
                    mt={10}
                >
                    <Text fontSize="3xl" fontWeight="bold">
                    ⚡️Welcome to Sprompt
                    </Text>
                    <Badge variant="subtle" colorScheme="pink" ml={1}>
                    BETA
                    </Badge>
                </Flex>
                <Text color="gray.500" mb={10}>
                    The future social app of web3
                </Text>
                <IDKitWidget
                    action={action}
                    signal="my_signal"
                    onSuccess={onSuccess}
                    handleVerify={handleProof}
                    app_id={app_id}
                    credential_types={credential_types}
                    // walletConnectProjectId="get_this_from_walletconnect_portal"
                >
                    {({ open }) => <Button variant="solid" size="md" onClick={open}>
                                        Connect to WorldCoin Wallet
                                    </Button>}
                </IDKitWidget>
                {/* <Button variant="solid" size="md" onClick={createWallet}>
                    Create Local Wallet
                </Button> */}
                </Flex>
            </ChakraProvider>);
}


//   <div>
//     <h2>Hello from page A</h2>
//     <br />
//     <Link to="/pageB">Navigate to Page B</Link>
//   </div>